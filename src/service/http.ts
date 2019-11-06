// axios 和 公共请求方法封装
import axios from 'axios';
import storage from '@/utils/storage';
import { confirmTips, warnTipsTips, successTips } from '@/components/Notification/index.tsx';
import { GET_EFFECTIVE_TIME } from '@/common/js/constance';


let instance = axios.create({
  baseURL: '/api/v1/', // 接口前缀
  timeout: 10000 // 设置响应超时时间
});
// 错误码
const ERROR_CODE_MAP = {
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '访问页面不存在。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

// 请求拦截
instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // 强制设置表单提交格式，兼容其他浏览器,只需要传json
      // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.headers['Content-Type'] = config.headers['Content-Type']
        ? config.headers['Content-Type']
        : 'application/json';
    }
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: new Date().getTime()
      };
    }
    // 设置token
    const token = storage().getLocal('AUTH_TOKEN');
    token && (config.headers.token = token);
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截
instance.interceptors.response.use(
  function (response: any) {
    if (response.status === 200) {
      const code = response.data && Number(response.data.code);
      if (code !== 0) {
        // 失败
        if (code === 7) {
          warnTipsTips('未登录或登录已过期，请重新登录');
          // 清除用户信息
          storage().clearLocal();
          setTimeout(() => {
            window.location.pathname = '/';
          }, 1000);
        } else {
          confirmTips(response.data.message || ERROR_CODE_MAP[response.data.code]);
        }
        return Promise.reject(response);
      }
      return Promise.resolve(response);
    } else {
      warnTipsTips(ERROR_CODE_MAP[response.status]);
      return Promise.reject(response);
    }
  },
  function (error: any) {

    let errorMessage = '';

    if (typeof(error) === 'string') {

      errorMessage = error;

    } else if (typeof(error) === 'object') {

      const reg = /timeout/g;
      if (reg.test(error.message)) {
        errorMessage = '抱歉，操作超时, 请稍后再试';
      } else {
        errorMessage = ERROR_CODE_MAP[error.response.status];
      }

    }
    warnTipsTips(errorMessage);
    return Promise.reject(error);
  }
);


interface GetOpt {
  isCache?: boolean,
  isRefresh?: boolean,
}

class Http {
  /**
   * get方法，对应get请求
   * @param { String } url [请求的url地址]
   * @param { Object } params [请求时携带的参数]
   * @param { Object } opt [请求时配置的参数]  isCache: true 缓存数据，并从缓存中去；isRefresh：true 不从缓存中去拿数据， 并会刷新缓存数据
   */
  get(url: string, params?: any, opt: GetOpt = {isCache: false, isRefresh: false}) {

    return new Promise((resolve, reject) => {
      // opt中的参数，数据缓存,isCache:是否需要缓存, isRefresh: 是否强刷缓存, url 作为key, 缓存时间 7*24*3600*1000

      if (opt.isCache && !opt.isRefresh) {
        let key = url.replace(/\//g, '_').toLocaleUpperCase();
        let res = storage().getLocal(key, false);
        // 缓存中存在有效
        if (res) {
          resolve(res);
          return false;
        }
      }

      instance
        .get(url, {params, ...opt})
        .then(res => {
          // 响应后缓存结果

          if (res.data.list === null) {
            res.data.list = [];
          }

          if (opt.isCache) {
            let key = url.replace(/\//g, '_').toLocaleUpperCase();
            storage().setLocal(key, res.data, GET_EFFECTIVE_TIME);
          }

          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    }).catch(err => {
      return Promise.reject(err);
    });
  }

  /**
   * post方法，对应post请求
   * @param { String } url [请求的url地址]
   * @param { Object } params [请求时携带的参数]
   * @param { Object } opt [请求时配置的参数]  hidden: 参数 true 隐藏提示
   */

  post(url: string, payload?: any, opt: any = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, payload, opt)
        .then(res => {
          if (!opt.hidden) {
            warnTipsTips(opt.text ? opt.text : '操作成功');
          }
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    }).catch(err => {
      return Promise.reject(err);
    });
  }

  put(url: string, payload?: any, opt: any = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, payload, opt)
        .then(res => {
          if (!opt.hidden) {
            successTips(opt.text ? opt.text : '更新成功');
          }
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    }).catch(err => {
      return Promise.reject(err);
    });
  }

  delete(url: string, payload?: any, opt: any = {}) {
    return new Promise((resolve, reject) => {
      instance
        .post(url, payload, opt)
        .then(res => {
          if (!opt.hidden) {
            warnTipsTips(opt.text ? opt.text : '删除成功');
          }
          resolve(res.data);
        })
        .catch(err => {
          reject(err.data);
        });
    }).catch(err => {
      return Promise.reject(err);
    });
  }
}

let httpInstance = null;

export default () => {
  if (!httpInstance) {
    httpInstance = new Http();
  }
  return httpInstance;
};

