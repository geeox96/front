<template>
  <v-app-bar color="primary">
    <v-btn
      fab
      append
      class="elevation-0 hidden-lg-and-up"
      @click="abrirMenu"
      icon
      large
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title
      ><span class="display-2 text--text">Vapor Center</span></v-toolbar-title
    >
    <v-spacer />
    <v-btn
      v-if="!logado"
      fab
      append
      class="elevation-0"
      @click="fazerLogin"
      icon
      large
    >
      <v-icon>mdi-account-box</v-icon>
    </v-btn>
    <v-btn
      v-if="logado"
      fab
      append
      class="elevation-0"
      @click="abrirPainel"
      icon
      large
    >
      <v-icon>mdi-account-box</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      logado: false
    };
  },

  methods: {
    abrirMenu() {
      this.$store.commit("abrirDrawer");
    },

    fazerLogin() {
      this.$router.push({ name: "Logar" });
    },

    abrirPainel() {
      this.$router.push({ name: "Painel" });
    }
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }
};
</script>

<style></style>
