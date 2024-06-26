const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },

  {
    path: '/login',
    component: () => import('src/pages/LoginPage.vue') // Updated path
  },
  
  {
    path: '/register',
    component: () => import('src/pages/RegisterPage.vue') // Updated path
  },
]

export default routes
