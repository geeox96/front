<template>
<v-layout justify-center>
    <v-dialog v-model="abrir" persistent max-width="800" transition="dialog-bottom-transition">
    <v-card>
      <v-card-text class="headline text-center">{{liquido.nome}}</v-card-text>
      <v-divider />
      <v-card-actions>
        <v-flex>
          <v-img
        src="'liquido.img'"
      >{{liquido.img}}</v-img>
        </v-flex>
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
    };
  },

  methods: {
    fechaDialog() {
      this.$emit("fechar");
    },
    

  }
};
</script>

<style>

</style>
