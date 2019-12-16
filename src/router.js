import Vue from "vue";
import Router from "vue-router";
import usuario from "./store/modules/usuarios";
import jwt from "jsonwebtoken";

Vue.use(Router);

export const router = new Router({
  base: process.env.BASE_URL,
  //mode: "history",
  routes: [
    {
      path: "/404",
      name: "404",
      component: () => import("./views/404.vue"),
      meta: {
        permissao: "livre"
      }
    },
    {
      path: "/login",
      name: "Logar",
      component: () => import("./views/Login.vue"),
      meta: {
        permissao: "deslogado"
      }
    },
    {
      path: "/",
      name: "Inicio",
      component: () => import("./views/Inicio.vue"),
      meta: {
        permissao: "livre"
      }
    },
    {
      path: "/juices",
      name: "Juices",
      component: () => import("./views/Juices.vue"),
      meta: {
        permissao: "livre"
      }
    },
    {
      path: "/fabricantes",
      name: "Fabricantes",
      component: () => import("./views/Fabricantes.vue"),
      meta: {
        permissao: "livre"
      }
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
      path: "/painel",
      name: "Painel",
      component: () => import("./views/painel/index.vue"),
      meta: {
        permissao: "usuario"
      }
    },
    // {
    //   path: '/painel/fabricante',
    //   name: 'PainelFabricante',
    //   component: () => import('./views/fabricante/index.vue'),
    //   meta: {
    //     permissao: 'fabricante'
    //   }
    // },
    {
      path: "/adminvapor",
      name: "AdministracaoVapor",
      component: () => import("./views/adminvapor.vue"),
      meta: {
        permissao: "admin"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("ae");
  const token = localStorage.getItem("token");

  if (token) {
    const dadosToken = jwt.decode(token);
    const nivel = dadosToken.tipo_conta;
    if (nivel === 400) next();
    else if (to.meta.permissao === "deslogado") next("/painel");
    else if (to.meta.permissao === "usuario" && nivel > 109) next();
  } else {
    if (to.meta.permissao === "livre") next();
    else if (!to.meta.permissao) next("/404");
    else if (to.meta.permissao === "deslogado") next();
  }
});
