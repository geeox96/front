<template>
<v-layout justify-center>
    <v-dialog v-model="abrir" persistent max-width="290" transition="dialog-bottom-transition">
    <v-card>
        <v-card-title class="headline">{{liquido.nome}}</v-card-title>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="fechaDialog">Fechar</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</v-layout>
</template>

<script>
export default {
props: {
  abrir: {
    type: Boolean,
      default: false
    },
    liquido: {
      type: Object
    }
  },

  data() {
    return {
      alo: false
    };
  },

  methods: {
    fechaDialog() {
      this.$emit("fechar");
    }
  }
};
</script>

<style>

</style>
