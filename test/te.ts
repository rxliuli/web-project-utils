export type ArrayCallback<T, R> = (item: T, index?: number, arr?: T[]) => R

export function convert<T, R>(t: T): R {
  return (t as unknown) as R
}

/**
 * js 数组按照某个条件进行分组
 *
 * @param {Array<Object>} arr 要进行分组的数组
 * @param {Function} kFn 元素分组的唯一标识函数
 * @param {Function} [vFn] 元素分组的值处理的函数。第一个参数是累计值，第二个参数是当前正在迭代的元素，如果你使用过 {@link Array#reduce} 函数的话应该对此很熟悉
 * @param {Function} [init=[]] 每个分组的产生初始值的函数。类似于 reduce 的初始值，但它是一个函数，避免初始值在所有分组中进行累加。
 * @returns {Map<Object,Object>} 元素标识 -> 数组映射 Map
 */
export function groupBy<T, K, R>(
  arr: T[],
  kFn: ArrayCallback<T, K>,
  /**
   * 默认的值处理函数
   * @param {Map} res 最终 map 集合
   * @param {Object} item 当前迭代的元素
   */
  vFn: (res: R, item: T, index?: number, arr?: T[]) => R = convert(
    (res: T[], item: T) => {
      res.push(item)
      return res
    },
  ),
  init: () => R = () => convert([]),
): Map<K, R> {
  // 将元素按照分组条件进行分组得到一个 条件 -> 数组 的对象
  return arr.reduce((res, item: T, index?: number, arr?: T[]) => {
    const k = kFn(item, index, arr)
    // 如果已经有这个键了就直接追加, 否则先将之初始化再追加元素
    if (!res.has(k)) {
      res.set(k, init())
    }
    res.set(k, vFn(res.get(k), item, index, arr))
    return res
  }, new Map())
}

// 推导出来的类型居然是: Map<boolean, {}>
const map = groupBy([1, 2, 3], i => i % 2 === 0)
