/**
 * 缓存接口
 * 功能
 * 1. add 增加。如果不存在则添加，否则忽略
 * 2. del 删除。如果存在则删除，否则忽略
 * 3. set 修改。如果存在则设置，否则忽略
 * 4. get 根据 key 获取。如果存在则获取，否则忽略
 * 5. touch 根据 key 获取并刷新超时时间
 * 6. find 根据谓词查询 key
 * 7. list 根据谓词查询 key 获得列表
 *
 * @interface
 * TODO 这里的接口 API 需要进行重构
 */
export declare class ICache {
    /**
     * 全局缓存选项
     * @param {CacheOption} cacheOption 缓存选项
     */
    constructor(cacheOption: any);
    /**
     * 根据 key + value 添加
     * 如果不存在则添加，否则忽略
     * @param {String} key 缓存的 key
     * @param {Object} val 缓存的 value
     * @param {CacheOption} cacheOption 缓存的选项
     * @abstract
     */
    add(key: any, val: any, cacheOption: any): void;
    /**
     * 根据指定的 key 删除
     * 如果存在则删除，否则忽略
     * @param {String} key 删除的 key
     * @abstract
     */
    del(key: any): void;
    /**
     * 根据指定的 key 修改
     * 不管是否存在都会设置
     * @param {String} key 修改的 key
     * @param {Object} val 修改的 value
     * @param {CacheOption} cacheOption 修改的选项
     * @abstract
     */
    set(key: any, val: any, cacheOption: any): void;
    /**
     * 根据 key 获取
     * 如果存在则获取，否则忽略
     * @param {String} key 指定的 key
     * @param {CacheOption} cacheOption 获取的选项
     * @returns {Object} 获取到的缓存值
     * @abstract
     */
    get(key: any, cacheOption: any): void;
    /**
     * 根据 key 获取并刷新超时时间
     * @param {String} key 指定的 key
     * @param {CacheOption} cacheOption 获取的选项
     * @returns {Object} 获取到的缓存值
     * @abstract
     */
    touch(key: any, cacheOption: any): void;
}
//# sourceMappingURL=ICache.d.ts.map