import Vue from 'vue'
import Router from 'vue-router'
import jwt from 'jsonwebtoken'
import { networkInterfaces } from 'os';

Vue.use(Router)

const aut = (to, from, next) => {
  const token = localStorage.getItem('token')

  if(token) {
    const nivel = jwt.verify(token, process.env.VUE_APP_SECRET)
    
    if(to.meta.permissao === 'deslogado') {
      next('/painel')
    }

    if(to.meta.permissao === 'admin'){ if(nivel.tipo_conta === 400){ next() } else { next('/') } }

    if(to.meta.permissao === 'usuario') {
      if(nivel.ativo) {
        next()
      } else {
        next('/login')
      }
    }
    
  } else {
    if(to.meta.permissao === 'deslogado'){
      next()
    } else {
      next('/login')
    }
  }
  
}

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Logar',
      component: () => import('./views/Login.vue'),
      beforeEnter: aut,
      meta: {
        permissao: 'deslogado'
      }
    },
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
      path: '/painel',
      name: 'Painel',
      component: () => import('./views/painel/index.vue'),
      beforeEnter: aut,
      meta: {
        permissao: 'usuario'
      }
    },
    {
      path: '/adminvapor',
      name: 'AdministracaoVapor',
      component: () => import('./views/adminvapor.vue'),
      beforeEnter: aut,
      meta: {
        permissao: 'admin'
      }
    }
  ]
})
