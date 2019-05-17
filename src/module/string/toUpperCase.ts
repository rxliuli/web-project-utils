import { isNullOrUndefined } from '../obj/isNullOrUndefined'

/**
 * 字符串安全的转换为大写
 * @param {String} str 字符串
 * @returns {String} 转换后得到的全大写字符串
 */
export function toUpperCase(str: string): string {
  if (isNullOrUndefined(str) || typeof str !== 'string') {
    return str
  }
  return str.toUpperCase()
}
