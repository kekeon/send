
// ref: https://umijs.org/config/
var path = require('path');
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'send',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  "proxy": {
    "/api": {
      "target": "127.0.0.1:8090",
      "changeOrigin": true,
    }
  }
}

