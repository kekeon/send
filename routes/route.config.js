

exports.routers  = [
  {
    path: '/',
    component: './pages/index',
  },

  // app
  {
    path: '/main',
    component: './pages/main',
    routes: [
      {
        path: '/main/doc-edit',
        name: 'DocEdit',
        component: './DocLibrary/DocEdit',
      }
    ]
  }
];
