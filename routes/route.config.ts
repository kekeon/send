// noinspection aegis.code.check.validation.typescript.format
exports.routers = [

  // app
  {
    path: '/doc',
    component: '../layouts/BasicLayout.tsx',
    routes: [
      {
        path: '/doc/edit',
        component: './Doc/DocEdit.tsx',
      },

      {
        path: '/doc/history',
        component: './Doc/History.tsx',
      },
      {
        path: '/doc/member',
        component: './Doc/Member.tsx',
      },
      {
        component: '404',
      },
    ]
  },
  {
    path: '/',
    component: './User/login.tsx',
  },


  {
    component: '404',
  },
];

