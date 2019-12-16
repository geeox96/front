<template>
  <v-container fluid>
    <v-data-iterator
      :items="fabricantes"
      hide-default-footer
      disable-pagination
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            xl="2"
            lg="2"
            md="4"
            sm="6"
            xs="6"
          >
            <v-card>
              <v-card-title class="justify-center">
                <h4>{{ item.nome }}</h4>
              </v-card-title>
              <v-list>
                <v-list-item class="justify-space-around">
                  <v-list-item-content class="font-weight-light"
                    >Estado: {{ item.estado }}</v-list-item-content
                  >
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light"
                    >Qnt de Juice:
                    {{ item.liquido_id.length }}</v-list-item-content
                  >
                  <v-list-item-content class=" font-weight-light">{{
                    item.quantidadeJuice
                  }}</v-list-item-content>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light"
                    >Rate: 5</v-list-item-content
                  >
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light"
                    >Revendedores:</v-list-item-content
                  >
                  <v-list-item-content class=" font-weight-light"
                    >0</v-list-item-content
                  >
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light"
                    >Acessar Site:</v-list-item-content
                  >
                  <v-list-item-content class=" font-weight-light">
                    <v-icon @click="irSite(item.url_site)"
                      >mdi-open-in-new</v-icon
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-btn
                color="blue lighten-4"
                append
                class="elevation-0"
                width="500"
                >Mais detalhes</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      buscar: "",

      fabricantes: [],
      alo: []
    };
  },

  computed: {
    ...mapGetters(["getTodosFabricantesAtivos"])
  },

  methods: {
    irSite(url) {
      if (!url) {
        alert("Fabricante não possui site");
      } else {
        window.open(url);
      }
    }
  },

  created() {
    this.$store.dispatch("consultarFabricantesAtivos").then(() => {
      this.fabricantes = this.getTodosFabricantesAtivos;
      console.log(this.fabricantes);
    });
  }
};
</script>

<style></style>
