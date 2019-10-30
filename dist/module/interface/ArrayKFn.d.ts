import { ArrayCallback } from 'rx-util/dist/module/interface/ArrayCallback';
/**
 * 数组遍历时的标准回调函数或者对象属性值的类型
 * 因为在数组操作中从对象中获取属性值实在是太常见不过的事情，所以这里直接原生支持了
 * @typeparam T 数组元素的类型
 * @typeparam R 每项数组元素映射之后的类型
 */
export declare type ArrayKFn<T, R> = PropertyKey | ArrayCallback<T, R>;
//# sourceMappingURL=ArrayKFn.d.ts.map