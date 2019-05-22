/**
 * 监视指定函数返回值的变化
 * @param fn 需要监视的函数
 * @param callback 回调函数
 * @param [interval=100] 每次检查的间隔时间，默认为 100ms
 * @returns 关闭这个监视函数
 */
export declare function watch(fn: (...args: any[]) => any, callback: (...args: any[]) => void, interval?: number): Function;
//# sourceMappingURL=watch.d.ts.map