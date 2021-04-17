import { pathExists, readJson } from 'fs-extra'
import {
  Application,
  ApplicationConfig,
  BaseIntegrated,
} from '../blog/Application'
import { HexoIntegrated, HexoIntegratedConfig } from '../blog/HexoIntegrated'
import {
  VuepressIntegrated,
  VuepressIntegratedConfig,
} from '../blog/VuepressIntegrated'
import { i18n } from '../util/I18n'
import path from 'path'
import ora from 'ora'

type JoplinBlogConfig = ApplicationConfig & {
  type: 'hexo' | 'vuepress'
} & (HexoIntegratedConfig | {})

class BlogCommand {
  private static async getBlogApplication(config: JoplinBlogConfig) {
    let integrated: BaseIntegrated
    switch (config.type) {
      case 'hexo':
        integrated = new HexoIntegrated(config as HexoIntegratedConfig)
        break
      case 'vuepress':
        integrated = new VuepressIntegrated(config as VuepressIntegratedConfig)
        break
      default:
        throw new Error('不支持的博客类型')
    }
    return new Application(config, integrated)
  }

  async checkConfig(): Promise<JoplinBlogConfig | false> {
    const configPath = path.resolve('.joplin-blog.json')
    if (!(await pathExists(configPath))) {
      console.error(
        i18n.t("blog.Can't find configuration file _joplin-blog_json"),
      )
      return false
    }
    return (await readJson(configPath)) as JoplinBlogConfig
  }

  async gen() {
    await i18n.load(await i18n.getLanguage())
    const config = await this.checkConfig()
    if (!config) {
      return
    }
    const application = await BlogCommand.getBlogApplication(config)
    await this.run(application)
  }

  async run(app: Application) {
    const checkInfo = await app.check()
    if (checkInfo !== true) {
      console.error('测试 joplin 服务失败: ', checkInfo)
      return
    }
    const spinner = ora({
      color: 'blue',
    })

    spinner.start('开始过滤 joplin 笔记')
    const arr = await app.filter()
    if (arr.length === 0) {
      spinner.warn('没有需要处理的笔记').stopAndPersist()
      return
    }
    spinner.stopAndPersist({
      text: i18n.t(`blog.Filter to get {{length}} notes to be processed`, {
        length: arr.length,
      }),
    })

    spinner.start('开始读取笔记附件与标签')
    const noteList = await app.readNoteAttachmentsAndTags(arr, (options) => {
      spinner.text = `[${options.rate}/${options.all}] 正在读取笔记附件与标签: ${options.title}`
    })
    spinner.text = '结束读取笔记附件与标签'
    spinner.stopAndPersist()

    spinner.start('开始框架初始化动作')
    await app.handler.init()
    spinner.stopAndPersist({
      text: '结束框架初始化动作',
    })

    spinner.start('开始解析笔记中的 Joplin 内部链接与附件资源')
    const replaceContentNoteList = app.parseAndWriteNotes(
      noteList,
      (options) => {
        spinner.text = `[${options.rate}/${options.all}] 正在解析笔记中的 Joplin 内部链接与附件资源: ${options.title}`
      },
    )
    spinner.stopAndPersist({
      text: '结束解析笔记中的 Joplin 内部链接与附件资源',
    })

    spinner.start('开始写入笔记到本地文件')
    await app.writeNote(replaceContentNoteList, (options) => {
      spinner.text = `${options.rate}/${options.all} 正在写入笔记到本地文件: ${options.title}`
    })
    spinner.stopAndPersist({ text: '结束写入笔记到本地文件' })

    spinner.start('开始复制附件资源')
    await app.copyResources(noteList, (options) => {
      spinner.text = `${options.rate}/${options.all} 正在复制附件资源: ${options.title}`
    })
    spinner.stopAndPersist({ text: '结束复制附件资源' })

    spinner.start().stopAndPersist({
      text: '结束生成博客',
    })
  }
}

export const blogCliCommand = new BlogCommand()
