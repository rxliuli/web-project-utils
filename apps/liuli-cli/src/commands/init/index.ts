import { Command, Option } from 'commander'
import {
  GenerateConfig,
  GenerateProgram,
  TemplateTypeEnum,
} from './GenerateProgram'
import path from 'path'

const initProgram = new GenerateProgram()

const templateOption = new Option('--template <template>', '模板类型').choices([
  TemplateTypeEnum.Lib,
  TemplateTypeEnum.Cli,
])
templateOption.required = true

export const initCommand = new Command()
  .command('generate <dest>')
  .description('生成一些初始项目')
  .addOption(templateOption)
  .action(async (dest, options: Pick<GenerateConfig, 'template'>) => {
    await initProgram.generate({
      ...options,
      dest: path.resolve(dest),
    })
  })
