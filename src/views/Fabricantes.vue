
<template>
  <v-container fluid>
    <v-row v-if="loading">
      <v-col v-for="i in 18" cols="12" xl="2" lg="2" md="4" sm="6" xs="6">
        <v-skeleton-loader class="mx-auto" max-width="300" type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-data-iterator v-else :items="fabricantes" hide-default-footer disable-pagination>
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
            <v-card :class="item.premium ? 'premiumCard' : 0">
              <v-card-title class="justify-center">
                <h4>{{ item.nome }}</h4>
              </v-card-title>
              <v-list>
                <v-list-item>
                  <v-list-item-content class="font-weight-light font-weight-medium">Estado:</v-list-item-content>
                  <span class="font-weight-light">{{ item.estado }}</span>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light font-weight-medium">Qnt de sabores:</v-list-item-content>
                  <span class="font-weight-light">
                    {{
                    item.liquido_id.length
                    }}
                  </span>
                </v-list-item>
                <v-divider />
                <v-list-item>
                  <v-list-item-content class="font-weight-light font-weight-medium">Avaliação:</v-list-item-content>
                  <span class="font-weight-light">{{ item.ratio }}</span>
                </v-list-item>
                <v-divider />
                <!-- <v-list-item>
                  <v-list-item-content class="font-weight-light"
                    >Revendedores:</v-list-item-content
                  >
                  <v-list-item-content class=" font-weight-light"
                    >0</v-list-item-content
                  >
                </v-list-item>
                <v-divider />-->
                <v-list-item>
                  <v-list-item-content class="font-weight-light font-weight-medium">Acessar Site:</v-list-item-content>
                  <span class="font-weight-light">
                    <v-icon @click="irSite(item.url_site)">mdi-open-in-new</v-icon>
                  </span>
                </v-list-item>
              </v-list>
              <v-btn color="secondary" tile block class="elevation-0">Mais detalhes</v-btn>
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
      loading: true,
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
    })
    .then(() => this.loading = false)
  }
};
</script>

<style>
.premiumCard {
  background: linear-gradient(
    270deg,
    #fff,
    #e3e3e3,
    #bbbbbb,
    #989898,
    #7d7d7d,
    #505050
  );
  background-size: 1200% 1200%;
  -webkit-animation: PremiumCard 9s ease infinite;
  -moz-animation: PremiumCard 9s ease infinite;
  animation: PremiumCard 9s ease infinite;
}

@-webkit-keyframes PremiumCard {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@-moz-keyframes PremiumCard {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@keyframes PremiumCard {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
</style>
