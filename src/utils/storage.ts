/**
 * 浏览器缓存组件
 * 添加缓存 SetLocal('mycache', 123, 7*24*3600*1000); // stamp 缓存时间戳
 * 获取缓存 GetLocal('mycache');
 *
 * @class CacheManager
 */


/**
 * 缓存中的数据格式： {exp: stamp, v:<data>}
 */
class CacheManager {

  private localStorage: {
    setItem(key: string,  value: string),
    getItem(key: string)
    removeItem(key: string)
    clear()
  };

  constructor () {
    this.localStorage = window.localStorage;
  }

  /**
   * set localStorage
   * @param key
   * @param value
   * @param effectiveTime 有效时长
   */
  setLocal (key: string, value: any, effectiveTime: number) {
    let exp = new Date().valueOf() + effectiveTime;

    let cacheData = {
      exp: exp,
      v: value
    };

    this.localStorage.setItem(key, JSON.stringify(cacheData));
  }

  getLocal (key: string, defaultValue?: any) {
    let val = this.localStorage.getItem(key);
    let nowTime = +new Date();
    let obj = JSON.parse(val);
    if (!obj) {
      return defaultValue;
    }
    // 过期
    if (nowTime > obj.exp) {
      this.localStorage.removeItem(key);
      return defaultValue;
    }
    return obj.v || (obj.v === 0 ? 0 : defaultValue);
  }

  removeLocal (key: string) {
    this.localStorage.removeItem(key);
  }

  clearLocal () {
    this.localStorage.clear();
  }
}

// 初始化缓存对象

let cacheInstance = null;

export default () => {
  if (!cacheInstance) {
    cacheInstance = new CacheManager();
  }
  return cacheInstance
}

