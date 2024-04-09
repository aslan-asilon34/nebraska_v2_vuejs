import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth-page/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/post',
      name: 'post.index',
      component: () => import('../views/post/Index.vue')
    },
    {
      path: '/create',
      name: 'post.create',
      method: 'post',
      component: () => import('../views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        method: 'put',
        component: () => import('../views/post/Edit.vue')
    }
  ]
})

export default router
