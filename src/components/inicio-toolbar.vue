<template>
  <v-app-bar 
    color="primary"
    dark
  >
  <v-btn fab append class="elevation-0 hidden-lg-and-up" click="$store.commit('drawer')" icon large>
    <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title>Vapor Center</v-toolbar-title>
    <v-spacer/>
    <v-btn fab append class="elevation-0" @click="fazerLogin" icon large>
    <v-icon>mdi-account-box</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    abrirDrawer(){
      drawer? drawer : !drawer
    },

    fazerLogin() {
      this.$router.push({ name: 'Logar' });
    },
  }
};
</script>

<style>
</style>