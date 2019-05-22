/**
 * 包装一个函数为有错误重试功能的函数
 * 注: 如果发生错误，最终将抛出最后一次调用的异常
 * @param fn 需要被包装的函数
 * @param [num=1] 调用的次数。默认为 1
 * @param [errorCheck=res=>true] 检查返回结果是否需要重试的函数。默认只要 resolve() 就返回 true
 * @returns 包装后的有错误重试功能的函数
 */
export declare function trySometime<R, Func extends Function = (...args: any[]) => R>(fn: Func, num?: number, errorCheck?: (res: R) => boolean): Func;
//# sourceMappingURL=trySometime.d.ts.map