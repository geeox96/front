<template>
  <v-layout justify-center>
    <v-dialog v-model="abrir" persistent max-width="1000" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title>Editar {{ editFabricante.nome }}</v-card-title>
        <v-flex xl12 lg12 md12 sm12 xs12>
          <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="editFabricante.nome" label="Nome" required :rules="rules"></v-text-field>
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field v-model="editFabricante.descricao" label="Descricao"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-model="editFabricante.cidade" label="Cidade"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="editFabricante.estado"
                  label="Estado"
                  required
                  :rules="rules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editFabricante.url_site" label="Site"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editFabricante.url_insta" label="Instagram"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editFabricante.url_face" label="Facebook"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-model="editFabricante.telefone" label="Telefone"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field v-model="editFabricante.whatsapp" label="What's app"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editFabricante.email_contato" label="E-mail"></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <span>Ativo</span>
                <v-switch v-model="editFabricante.ativo"></v-switch>
              </v-col>
              <v-col cols="12" md="3">
                <span>Premium</span>
                <v-switch v-model="editFabricante.premium"></v-switch>
              </v-col>
            </v-row>
          </v-form>
        </v-flex>
        <v-card-actions>
          <v-flex row xl12 lg12 md12 sm12 xs12>
            <v-btn @click="fechar" :loading="fecharLg" class="ml-5" dark color="red">Fechar</v-btn>
            <v-spacer />
            <v-btn type="submit" color="primary" @click="Editar">Editar</v-btn>
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
    },
    fabricante: {
      type: Object
    }
  },

  data() {
    return {
      editFabricante: {},
      valid: "",
      fecharLg: false,
      rules: [v => !!v || "Campo Obrigatorio"]
    };
  },

  async mounted() {
    await this.preencherDados();
  },

  methods: {
    fechar() {
      this.fecharLg = true
      this.$emit("fechar", 2);
    },

    Editar() {
      if (this.$refs.form.validate()) {
        const dados = {
          _id: this.editFabricante._id,
          nome: this.editFabricante.nome,
          liquido_id: this.editFabricante.liquido_id,
          descricao: this.editFabricante.descricao,
          img: this.editFabricante.img,
          whatsapp: this.editFabricante.whatsapp,
          telefone: this.editFabricante.telefone,
          email_contato: this.editFabricante.email_contato,
          cidade: this.editFabricante.cidade,
          estado: this.editFabricante.estado,
          url_site: this.editFabricante.url_site,
          url_insta: this.editFabricante.url_insta,
          url_face: this.editFabricante.url_face,
          ativo: this.editFabricante.ativo,
          premium: this.editFabricante.premium
        };
        this.$store.dispatch("editarFabricanteAdmin", dados).then(() => {
          this.$emit("fechar", 2);
        });
      }
    },

    preencherDados() {
      this.editFabricante = this.fabricante;
    }
  }
};
</script>

<style>
</style>