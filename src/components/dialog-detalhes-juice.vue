<template>
  <v-flex>
    <v-dialog
      v-model="abrir"
      @keypress.esc="fecharDialog"
      max-width="800"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>
          <v-spacer />
          <span class="headline">Detalhes do Juice</span>
          <v-spacer />
        </v-card-title>
        <v-layout fill-height style="background: rgb(253, 242, 255)">
          <v-flex>
            <v-img :aspect-ratio="9/16" class="ml-5 elevation-5" width="300px" :src="liquido.img" />
          </v-flex>

          <v-flex>
            <v-card-text class="headline text-md-center">{{liquido.nome}}</v-card-text>
            <v-card-title class="title">Descrição:</v-card-title>
            <v-card-text>{{liquido.info}}</v-card-text>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="fechaDialog">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
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
