<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    expand-on-hover
    app
    dark
    hide-overlay
    color="tertiary"
  >
    <v-list-item v-for="item in menu" :key="item.title" @click="nevegarPara(item.ir)">
      <v-list-item-icon>
        <v-icon>{{item.icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="ml-5">{{item.titulo}}</v-list-item-title>
    </v-list-item>
    <v-list-item @click="abrirClassificado">
      <v-list-item-icon>
        <v-icon>mdi-store</v-icon>
      </v-list-item-icon>
      <v-list-item-title class="ml-5">Classificados Vape</v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
  
</template>

<script>
import { store } from "./../store/store";
export default {
  data() {
    return {
      menu: [
        { titulo: "Inicio", icon: "mdi-home", ir: "Inicio" },
        { titulo: "Juice", icon: "mdi-eyedropper", ir: "Juices" },
        { titulo: "Fabricantes", icon: "mdi-flask", ir: "Fabricantes" },
        { titulo: "Fornecedores", icon: "mdi-truck-delivery", ir: "null" },
        { titulo: "Videos", icon: "mdi-library-video", ir: "null" },
        { titulo: "Reviews", icon: "mdi-comment-text-multiple", ir: "null" }
      ]
    };
  },

  methods: {
    nevegarPara(local) {
      this.$router.push({ name: local });
    },

    abrirClassificado() {
      window.open("http://classificadosvape.com/");
    }
  }
};
</script>

<style>
</style>
