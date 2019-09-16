<template>
<v-container fluid>
      <v-data-iterator
        :items="fabricantes"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card color='primary' dark>
                <v-card-title><h4>{{ item.nome }}</h4></v-card-title>
                <v-divider></v-divider>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>Estado:</v-list-item-content>
                    <v-list-item-content class="align-center">{{ item.estado }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>Qnt de Juice:</v-list-item-content>
                    <v-list-item-content class="align-end">{{ item.quantidadeJuice }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>Acessar Site:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      <v-icon
                        @click="irSite(item.url_site)"
                      >mdi-open-in-new</v-icon>
                  </v-list-item-content>
                  </v-list-item>
                  
                </v-list>
                <v-btn small append class='elevation-0' width="500" dark>Mais detalhes</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
data() {
  return {
      itemsPerPageOptions: [4, 8, 12],
      itemsPerPage: 4,
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
