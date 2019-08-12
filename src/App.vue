<template>
  <v-app id="app">
    <inicio-menu-lateral app/>
  <v-content>
    <inicio-toolbar app/>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>
import InicioToolbar from './components/inicio-toolbar';
import InicioMenuLateral from './components/inicio-menu-lateral'

export default {
  components: {
    InicioToolbar,
    InicioMenuLateral    
  },
  data: () => ({
    //
  }),
};
</script>

<style>

</style>

