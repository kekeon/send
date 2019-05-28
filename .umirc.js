
// ref: https://umijs.org/config/
var path = require('path');
var route = require('./routes/route.config');
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        hmer: true
      },
      dynamicImport: {
        webpackChunkName: true,
      },
      title: 'send',
      dll: false
    }],
  ],
  routes: route.routers,
  "proxy": {
    "/api": {
      "target": "127.0.0.1:8090",
      "changeOrigin": false,
    }
  }
}

