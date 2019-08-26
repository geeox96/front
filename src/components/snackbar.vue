<template>
  <v-snackbar
        v-model="$store.state.snackbar"
        bottom
        multi-line
        :timeout="$store.state.tempo"
        :color="$store.state.cor"
      >
        {{ $store.state.textoSnack }}
        <v-btn
          color="primary"
          @click="$store.state.snackbar = false"
        >
          Fechar
        </v-btn>
      </v-snackbar>
</template>

<script>

export default {
data() {
  return {
  };
},
}
</script>

<style>

</style>