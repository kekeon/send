

exports.routers  = [

  // app
  {
    path: '/doc',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/doc/edit',
        component: './Doc/DocEdit',
      },{
        component: '404',
      },
    ]
  },
  {
    path: '/',
    component: './index',
  },
  {
    component: '404',
  },
];
