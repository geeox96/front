<template>
  <v-layout justify-center >
    <v-dialog v-model="abrir" persistent max-width="800" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>Editar juice</v-card-title>
        <v-flex xl12 lg12 md12 sm12 xs12>
              <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
                <v-text-field outlined v-model="editLiquido.nome" label="Nome" required :rules='rules' ></v-text-field>
                <v-text-field outlined v-model="editLiquido.img" label="Imagem" ></v-text-field>
                <v-autocomplete
                  v-model="editLiquido.fabricante_id"
                  :loading="loading"
                  :items="getTodosFabricantes"
                  :search-input.sync="search"
                  item-text="nome"
                  item-value="_id"
                  cache-items
                  flat
                  outlined
                  label="Escolha o fabricante"
                ></v-autocomplete>
                <v-text-field outlined v-model="editLiquido.descricao" label="Descricao"  required :rules='rules' ></v-text-field>
                <v-text-field outlined v-model="editLiquido.info" label="Informações" ></v-text-field>
                <v-layout row>
                  <v-flex xl6 lg6 md6 sm6 xs6 >
                <v-text-field type="number" outlined v-model="editLiquido.pg" label="% Propilenogricol" ></v-text-field>
                  </v-flex>
                <v-flex xl6 lg6 md6 sm6 xs6 >
                <v-text-field type="number" outlined v-model="editLiquido.vg" label="% Glierina" ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-text-field outlined v-model="editLiquido.valor" label="Preço" ></v-text-field>
                <v-text-field outlined v-model="editLiquido.nota" label="Nota" ></v-text-field>
                <v-text-field outlined v-model="editLiquido.ativo" label="Ativo" ></v-text-field>
                <v-text-field outlined disabled v-model="editLiquido.visitas" label="Visitas" ></v-text-field>
              </v-form>
          </v-flex>
          <v-card-actions>
            
            <v-flex row xl12 lg12 md12 sm12 xs12>
              <v-btn @click="fechar" class='ml-5' dark color="red">Fechar</v-btn> 
                <v-spacer />
              <v-btn type="submit" color="secondery" @click="deletar">Deletar</v-btn>
                <v-spacer />
              <v-btn type="submit" color="primary" @click="criar">Editar</v-btn>
              
            </v-flex>
            </v-card-actions>
    </v-card>
</v-dialog>
</v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
props: {
  abrir: {
    type: Boolean,
      default: false,
    },
    liquido: {
      type: Object
    }
  },

  data() {
    return {
      loading: false,
      search: '',
      valid: '',
      editLiquido: {},
      rules: [
          v => !!v || 'Campo Obrigatorio'
      ]
    }
  },

  computed: {
    ...mapGetters(['getTodosFabricantes'])
  },

  mounted() {
    this.preencherDados()
  },

  methods: {
    fechar() {
      this.$emit('fechar', 4)
    },

    criar() {
        if (this.$refs.form.validate()) {

      const dados = {
              nome: this.nome,
              img: this.img,
              descricao: this.descricao,
              info: this.info,
              fabricante_id: this.fabricante_id,
              pg: parseInt(this.pg),
              vg: parseInt(this.vg),
              valor: parseFloat(this.valor),
      }
      this.$store.dispatch('criarLiquido', dados)
        .then(() => { this.$emit('fechar', 4) })
    }
    },

    deletar() {
      const dados = {
              _id: this.editLiquido._id,
              fabricante_id: this.editLiquido.fabricante_id._id,
      }
      this.$store.dispatch('deletarLiquido', dados)
        .then(() => { this.$emit('fechar', 4) })
    },

    async preencherDados() {
      this.editLiquido = this.liquido
    }
  },
}
</script>

<style>

</style>