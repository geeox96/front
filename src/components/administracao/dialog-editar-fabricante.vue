<template>
  <v-layout justify-center>
    <v-dialog v-model="abrir" persistent max-width="800" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title>Editar Fabricante</v-card-title>
        <v-flex xl12 lg12 md12 sm12 xs12>
          <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
            <v-image-input
              v-model="editFabricante.img"
              :image-quality="1"
              uploadIcon="Clique para fazer upload"
              clearable
              image-format="jpeg"
            />
            <v-text-field v-model="editFabricante.nome" label="Nome" required :rules="rules"></v-text-field>
            <v-text-field v-model="editFabricante.descricao" label="Descricao"></v-text-field>
            <v-text-field v-model="editFabricante.cidade" label="Cidade"></v-text-field>
            <v-text-field v-model="editFabricante.estado" label="Estado" required :rules="rules"></v-text-field>
            <v-text-field v-model="editFabricante.url_site" label="Site"></v-text-field>
            <v-text-field v-model="editFabricante.url_insta" label="Instagran"></v-text-field>
            <v-text-field v-model="editFabricante.url_face" label="Facebook"></v-text-field>
            <v-switch v-model="editFabricante.ativo"></v-switch>
          </v-form>
        </v-flex>
        <v-card-actions>
          <v-flex row xl12 lg12 md12 sm12 xs12>
            <v-btn @click="fechar" class="ml-5" dark color="red">Fechar</v-btn>
            <v-spacer />
            <v-btn type="submit" color="primary" @click="Editar">Editar</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import VImageInput from "vuetify-image-input";

export default {
  components: {
    VImageInput: VImageInput
  },
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
      rules: [v => !!v || "Campo Obrigatorio"]
    };
  },

  async mounted() {
    await this.preencherDados();
  },

  methods: {
    fechar() {
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
          cidade: this.editFabricante.cidade,
          estado: this.editFabricante.estado,
          url_site: this.editFabricante.url_site,
          url_insta: this.editFabricante.url_insta,
          url_face: this.editFabricante.url_face,
          ativo: this.editFabricante.ativo
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