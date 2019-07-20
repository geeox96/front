<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile v-for="item in menu" :key="item.title" @click="nevegarPara(item.ir)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="abrirClassificado">
            <v-list-tile-action>
              <v-icon>swap_horiz</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Classificados Vape</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <img
            :height="$vuetify.breakpoint.smAndDown ? 50 : 50"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Google-Logo.svg"
          />
        </v-toolbar-title>
      </v-toolbar>
      <v-content class="backfad">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      menu: [
        { titulo: "Inicio", icon: "home", ir: "Inicio" },
        { titulo: "Juice", icon: "view_module", ir: "Juices" },
        { titulo: "Fabricantes", icon: "business", ir: "Fabricantes" },
        { titulo: "Fornecedores", icon: "shopping_basket", ir: "Fabricantes" },
        { titulo: "Videos", icon: "ondemand_video", ir: "Fabricantes" },
        { titulo: "Reviews", icon: "feedback", ir: "Fabricantes" }
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
.backfad {
  background: rgb(212, 212, 212); /* fallback for old browsers */
}
</style>


