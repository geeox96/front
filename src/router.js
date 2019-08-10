import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: () => import('./views/Inicio.vue')
    },
    {
      path: '/juices',
      name: 'Juices',
      component: () => import('./views/Juices.vue')
    },
    {
      path: '/fabricantes',
      name: 'Fabricantes',
      component: () => import('./views/Fabricantes.vue')
    },
    // {
    //   path: '/fornecedores',
    //   name: 'Fabricantes',
    //   component: () => import('./views/Fabricantes.vue')
    // },
    // {
    //   path: '/videos',
    //   name: 'Fabricantes',
    //   component: () => import('./views/Fabricantes.vue')
    // },
    // {
    //   path: '/reviews',
    //   name: 'Fabricantes',
    //   component: () => import('./views/Fabricantes.vue')
    // },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    }
  ]
})
