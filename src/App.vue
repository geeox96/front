<template>
  <v-app style="background-color: #6d6d6d" id="app">
    <inicio-menu-lateral app />
    <v-content>
      <inicio-toolbar app />
      <snackbar app />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import InicioToolbar from "./components/inicio-toolbar";
import InicioMenuLateral from "./components/inicio-menu-lateral";
import Snackbar from "./components/snackbar";

export default {
  components: {
    InicioToolbar,
    InicioMenuLateral,
    Snackbar
  },
  data: () => ({})
};
</script>

<style>
</style>

