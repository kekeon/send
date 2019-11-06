import pageRoutes from './router.config.js';
import plugins from './plugin.config.js';
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
let config = {
  treeShaking: true,
  hash: true,
  plugins,
  routes: pageRoutes,
  targets: {
    ie: 9
  },
  chainWebpack: config => {
    // 设置 alias
    config.resolve.alias.set('@', path.resolve(__dirname, '../src'));
    config.resolve.alias.set('utils', path.resolve(__dirname, '../src/utils'));
    config.resolve.alias.set('pages', path.resolve(__dirname, '../src/pages'));
    config.resolve.alias.set('cmpt', path.resolve(__dirname, '../src/components'));
    config.resolve.alias.set('coms', path.resolve(__dirname, '../src/commons'));
  },
  // 这里配置代理，下面的意思是当api请求有/dev时会自动设置到目标链接，主要用于解决跨域问题。
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:21000',
      secure: false,
      changeOrigin: true
    },
  },
  uglifyJSOptions (opts) {
    opts.uglifyOptions.compress.drop_console = true;
    opts.uglifyOptions.compress.keep_infinity = true;
    return opts;
  }
};
// dev模式

if (isDev) {
  config.mock = {
    exclude: ['mock/_*.js', 'mock/**/_*.js', 'mock/_*/**/*.js']
  };
  config.devtool = '#cheap-eval-source-map';
} else {
  // build 模式
  config.publicPath = '/';
}
export default config;
