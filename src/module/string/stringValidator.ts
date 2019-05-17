import { isNullOrUndefined } from '../obj/isNullOrUndefined'
/**
 * 判断是否为小数的正则表达式
 */
const FloatRule = /^(-?\d+)(.\d+)?$/
/**
 * 判断是否为整数的正则表达式
 */
const IntegerRule = /^-?\d+$/
/**
 * 判断是否为邮箱的正则表达式
 */
const EmailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
/**
 * 判断是否为 ipv4 地址的正则表达式
 */
const Ipv4Rule = /^((25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(25[0-5]|2[0-4]\d|1?\d?\d)$/
/**
 * 判断是否为固定电话的正则表达式
 */
const TelephoneRule = /^0[1-9][0-9]{1,2}-[2-8][0-9]{6,7}$/
/**
 * 判断是否为移动电话的正则表达式
 */
const MobileRule = /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|)+\d{8})$/
/**
 * 判断是否为域名的正则表达式
 */
const DomainRule = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
/**
 * 判断是否为邮政编码的正则表达式
 */
const PostcodeRule = /^\d{6}$/

/**
 * 字符串校验
 * TODO 使用 any 可能是个严重的错误。。。
 */
export class StringValidator {
  /**
   * 判断一个字符串是否为空字符串
   * @param {String} str 字符串
   * @returns {Boolean} 是否为空字符串
   */
  public isEmpty(str: any): boolean {
    return isNullOrUndefined(str) || str === ''
  }
  /**
   * 判断一个字符串是否为空白的字符串
   * @param {String} str 字符串
   * @returns {Boolean} 是否为空字符串
   */
  public isBlank(str: any): boolean {
    return stringValidator.isEmpty(str) || str!.trim() === ''
  }

  /**
   * 判断字符串是否位小数
   * @param {String} str 需要进行判断的字符串
   * @returns {Boolean} 是否为小数
   */
  public isFloat(str: any): boolean {
    return FloatRule.test(str!)
  }

  /**
   * 判断字符串是否位整数
   * @param {String} str 需要进行判断的字符串
   * @returns {Boolean} 是否为小数
   */
  public isInteger(str: any): boolean {
    return IntegerRule.test(str!)
  }
  /**
   * 判断邮箱的格式是否正确
   * @param {String} str 邮箱字符串
   * @returns {Boolean} 是否是邮箱
   */
  public isEmail(str: any): boolean {
    return EmailRule.test(str!)
  }
  /**
   * 判断 ipv4 地址的格式是否正确
   * @param {String} str ipv4 字符串
   * @returns {Boolean} 是否是 ipv4 地址
   */
  public isIpv4(str: any): boolean {
    return Ipv4Rule.test(str!)
  }
  /**
   * 判断是否为固定电话
   * @param {String} str 字符串
   * @returns {Boolean} 是否为固定电话
   */
  public isTelephone(str: any): boolean {
    return TelephoneRule.test(str!)
  }
  /**
   * 判断是否为移动电话
   * @param {String} str 字符串
   * @returns {Boolean} 是否为移动电话
   */
  public isMoblie(str: any): boolean {
    return MobileRule.test(str!)
  }
  /**
   * 判断是否为域名
   * @param {String} str 字符串
   * @returns {Boolean} 是否为域名
   */
  public isDomain(str: any): boolean {
    return DomainRule.test(str!)
  }
  /**
   * 判断是否为邮政编码
   * @param {String} str 字符串
   * @returns {Boolean} 是否为邮政编码
   */
  public isPostcode(str: any): boolean {
    return PostcodeRule.test(str!)
  }
}

/**
 * 导出一个字符串校验的对象
 */
export const stringValidator = new StringValidator()
