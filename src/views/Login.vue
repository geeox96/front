<template>
    <v-container fluid grid-list-xl text-xs-center class="mt-1 pt-5">
        <v-layout row wrap>
          <v-flex xl4 lg4 md6 sm6 xs12 offset-xs4>
            <v-card color="white" class="ma-5 pa-1">
                <v-card-title>Logar</v-card-title>
              <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login" class="ma-4 pa-2">
                <v-text-field v-model="usuario" placeholder="" label="Usuario" required :append-icon="'mdi-account-box'"></v-text-field>
                <v-text-field v-model="senha" placeholder="" label="Senha" required :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" class="input-group--focused" @click:append="show = !show"></v-text-field>
                <v-btn type="submit" color="primary" large block class="mt-5 elevation-0"> Login</v-btn>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
data() {
    return {
      usuario: "",
      senha: "",
      account: "",
      valid: true,
      show: false,

    };
    },

    methods: {
    }
}
</script>

<style>

</style>