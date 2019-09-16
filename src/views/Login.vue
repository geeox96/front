<template>
    <v-container fluid grid-list-xl text-xs-center class="mt-1 pt-5">
        <v-layout row wrap justify-center>
          <v-flex xl4 lg6 md12 sm12 xs12>
            <v-card color="white" class="ma-5 pa-1">
                <v-card-title>Fazer login</v-card-title>
              <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
                <v-text-field v-model="email" placeholder="" label="E-mail" required :append-icon="'mdi-account-box'" :rules='emailRules'></v-text-field>
                <v-text-field v-model="senha" placeholder="" label="Senha" required  :rules='senhaRules' :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" class="input-group--focused" @click:append="show = !show"></v-text-field>
                <v-btn color="primary" large block class="mt-5 elevation-0" @click="logar">Login</v-btn>
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
      email: "",
      senha: "",
      valid: false,
      show: false,
      emailRules: [
          v => !!v || 'E-mail obrigatório',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
        ],
      senhaRules: [v => !!v || 'Senha obrigatória']

    };
    },

    methods: {
      
      async logar() { 
        if (this.$refs.form.validate()) {
          const dados = {
            email: this.email,
            senha: this.senha
          }
          await this.$store.dispatch('fazerLogin', dados)
            .then(resultado => {
              switch (resultado) {
                case 1:
                  this.$store.dispatch("chamarSnack", {texto: "Usuario não existente 🥺 cadastre-se para logar!", cor: "red", tempo: 4000} )
                  break
                case 2: 
                  this.$store.dispatch("chamarSnack", {texto: "Usuario Desativado", cor: "red", tempo: 4000} )
                  break
                case 3: 
                  this.$store.dispatch("chamarSnack", {texto: "Senha incorreta 😕", cor: "red", tempo: 4000} )
                  break
                default:
                  this.$router.push({ name: "Painel" });
              }
            })
        }
      },


    }
}
</script>

<style>

</style>