<template>
<v-container>
  <v-card color='primary' dark>
      <v-card-title >
        Fabricantes de e-liquido
        
        <v-spacer></v-spacer>
        <v-text-field
          v-model="buscar"
          append-icon="mdi-database-search"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
      no-results-text="Nenhum fabricante encontrado"
        :headers="headers"
        :items="fabricantes"
        :search="buscar"
        
      ><template v-slot:item.url_site="item">
        <v-icon
          @click="irSite(item.value)"
        >
          mdi-open-in-new
        </v-icon>
      </template> </v-data-table>
    </v-card>
</v-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
data() {
  return {
      buscar: '',
      headers: [
        {
          text: 'Marca',
          align: 'left',
          sortable: true,
          value: 'nome',
        },
        { text: 'Estado', value: 'estado' },
        { text: 'Qnt de Juice', value: 'quantidadeJuice' },

        { text: 'Acessar Site', value: 'url_site', sortable: false, align: 'center' },
        
      ],
      fabricantes: [],
      alo: []
  };
  },

  computed: {
    ...mapGetters(['getTodosFabricantesAtivos'])
  },

  methods: {
      irSite(url){
        if (!url){
            alert("Fabricante não possui site")
        } else { window.open(url) }
      },
  },

  created() {
    this.$store.dispatch('consultarFabricantesAtivos').then(() => {this.fabricantes = this.getTodosFabricantesAtivos})
  },
}
</script>

<style>

</style>
