<template>
  <v-layout justify-center>
    <v-dialog
      v-model="abrir"
      persistent
      max-width="800"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>Novo fabricante</v-card-title>
        <v-flex xl12 lg12 md12 sm12 xs12>
          <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
            <v-text-field
              v-model="nome"
              label="Nome"
              required
              :rules="rules"
            ></v-text-field>
            <v-text-field v-model="descricao" label="Descricao"></v-text-field>
            <v-text-field v-model="cidade" label="Cidade"></v-text-field>
            <v-text-field
              v-model="estado"
              label="Estado"
              required
              :rules="rules"
            ></v-text-field>
            <v-text-field v-model="url_site" label="Site"></v-text-field>
            <v-text-field v-model="url_insta" label="Instagran"></v-text-field>
            <v-text-field v-model="url_face" label="Facebook"></v-text-field>
            <v-text-field v-model="telefone" label="Telefone"></v-text-field>
            <v-text-field v-model="whatsapp" label="Whats App"></v-text-field>
            <v-text-field v-model="email_contato" label="E-Mail"></v-text-field>
          </v-form>
        </v-flex>
        <v-card-actions>
          <v-flex row xl12 lg12 md12 sm12 xs12>
            <v-btn @click="fechar" class="ml-5" dark color="red">Fechar</v-btn>
            <v-spacer />
            <v-btn type="submit" color="primary" @click="criar">Criar</v-btn>
          </v-flex>
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
    }
  },

  data() {
    return {
      valid: "",
      nome: "",
      descricao: "",
      telefone: "",
      whatsapp: "",
      email_contato: "",
      cidade: "",
      estado: "",
      url_site: "",
      url_insta: "",
      url_face: "",
      rules: [v => !!v || "Campo Obrigatorio"]
    };
  },

  methods: {
    fechar() {
      this.$emit("fechar", 1);
    },

    criar() {
      if (this.$refs.form.validate()) {
        const dados = {
          nome: this.nome,
          descricao: this.descricao,
          telefone: this.telefone,
          whatsapp: this.whatsapp,
          email_contato: this.email_contato,
          cidade: this.cidade,
          estado: this.estado,
          url_site: this.url_site,
          url_insta: this.url_insta,
          url_face: this.url_face
        };
        this.$store.dispatch("criarFabricante", dados).then(() => {
          this.$emit("fechar", 1);
        });
      }
    }
  }
};
</script>

<style></style>
