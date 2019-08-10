

exports.routers  = [

  // app
  {
    path: '/doc',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/doc/edit',
        component: './Doc/DocEdit',
      },

      {
        path: '/doc/history',
        component: './Doc/History',
      },
      {
        path: '/doc/member',
        component: './Doc/Member',
      },
      {
        component: '404',
      },
    ]
  },
  {
    path: '/',
    component: './User/login.ts',
  },


  {
    component: '404',
  },
];
