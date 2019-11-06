export default [
  ['umi-plugin-react', {
    antd: true,
    dva: {
      hmr: true
    },
    dynamicImport: true,
    title: 'network_manage_auto',
    dll: false,
    routes: {
      exclude: [
        /components\//,
      ],
    },
    locale: {
      default: 'zh-CN',
      baseNavigator: true,
      antd: true
    }
  }],
];
