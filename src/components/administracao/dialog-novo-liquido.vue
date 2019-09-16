<template>
  <v-layout justify-center >
    <v-dialog v-model="abrir" persistent max-width="800" transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>Novo juice</v-card-title>
        <v-flex xl12 lg12 md12 sm12 xs12>
              <v-form ref="form" v-model="valid" lazy-validation class="ma-4 pa-2">
                <v-text-field outlined v-model="nome" label="Nome" required :rules='rules' ></v-text-field>
                <v-text-field outlined v-model="img" label="Imagem" ></v-text-field>
                <v-autocomplete
                  v-model="fabricante_id"
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
                <v-text-field outlined v-model="descricao" label="Descricao"  required :rules='rules' ></v-text-field>
                <v-text-field outlined v-model="info" label="Informações" ></v-text-field>
                <v-layout row>
                  <v-flex xl6 lg6 md6 sm6 xs6 >
                <v-text-field type="number" outlined v-model="pg" label="% Propilenogricol" ></v-text-field>
                  </v-flex>
                <v-flex xl6 lg6 md6 sm6 xs6 >
                <v-text-field type="number" outlined v-model="vg" label="% Glierina" ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-text-field outlined v-model="valor" label="Preço" ></v-text-field>
                <!-- <v-text-field outlined v-model="nota" label="Facebook" ></v-text-field> -->
                <!-- <v-text-field outlined v-model="ativo" label="Facebook" ></v-text-field> -->
                <!-- <v-text-field outlined disabled v-model="visitas" label="Visitas" ></v-text-field> -->
              </v-form>
          </v-flex>
          <v-card-actions>
            
            <v-flex row xl12 lg12 md12 sm12 xs12>
              <v-btn @click="fechar" class='ml-5' dark color="red">Fechar</v-btn> 
                <v-spacer />
              <v-btn type="submit" color="primary" @click="criar">Criar</v-btn>
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
  },

  data() {
    return {
      loading: false,
      search: '',
      valid: '',
      nome: '',
      descricao: '',
      img: '',
      info: '',
      tag_id: '',
      fabricante_id: '',
      pg: 0,
      vg: 0,
      valor: 0,
      rules: [
          v => !!v || 'Campo Obrigatorio'
      ]
    }
  },

  computed: {
    ...mapGetters(['getTodosFabricantes'])
  },

      methods: {
        fechar() {
          this.$emit('fechar', 3)
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
            .then(() => { this.$emit('fechar', 3) })
        }
        }
    },
}
</script>

<style>

</style>