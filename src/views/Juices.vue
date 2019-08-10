<template>
  <v-container fluid grid-list-xl text-xs-center>
    <detalhes-juice :abrir="dialogDetalheDoJuice" :liquido="detalheJuice" @fechar="fechaDialogDetalhe"/>
      <v-layout justify-center row wrap>
        <v-flex xl2 lg3 md3 sm6 xs12 v-for="liquido in juices" :key="liquido.id">
          <v-hover 
            :open-delay="300">
      <template v-slot:default="{ hover }" >
        <v-card
          class="mx-auto elevation-0"
          max-width="344"
          @click="abrirDetalheJuice(liquido)"
        >
          <v-img :aspect-ratio="9/11" lazy-src :src="liquido.img" />
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              opacity="0.70"
              absolute
              color="#000"
            >
            <v-layout align-center justify-center column fill-height>
              
              <v-card-title class="infolay-nome">{{liquido.nome}}</v-card-title>
              <v-card-text class="infolay-fabricante">Por: {{liquido.fabricante}}</v-card-text>
              <v-card-text class="infolay">{{liquido.descricao}}</v-card-text>
              <v-card-actions>R$: {{liquido.valor}}</v-card-actions>
              <v-rating v-model="liquido.nota"
        background-color="orange lighten-3"
        color="orange"></v-rating>
            </v-layout>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
      </v-hover>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { juices } from "../api/juices";
import DetalhesJuice from "../components/detalhes-juice";

export default {
  components: {
    "detalhes-juice": DetalhesJuice
  },

    data() {
    return {
      juices: juices,
      overlay: false,
      detalheJuice: null,
      dialogDetalheDoJuice: false,
    };
  },

  mounted() {
    
  },

  methods: {
    abrirDetalheJuice(liquido) {
      this.dialogDetalheDoJuice = true;
      this.detalheJuice = liquido;
    }, 

    fechaDialogDetalhe() {
      this.dialogDetalheDoJuice = false;
    }
  }

}
</script>

<style lang="scss">
.infolay-nome {
    text-align: center;
    font-size: 130%;
    @media (max-width: 1024px) {
      font-size: 85%;
      text-shadow: rgb(187, 187, 187) 0px 1px 0px
    }
    color: #FFFFFF !important;
    margin-right: 10%;
    margin-left: 10%;
    text-transform: uppercase;
    position: relative;
    text-shadow: (
    rgb(187, 187, 187) 0px 1px 0px,
    rgb(208, 255, 255) 0px 2px 0px, 
    rgb(187, 187, 187) 0px 3px 1px, 
)
}
.infolay-fabricante {
    text-align: center;
    font-size: 105%;
    color: #FFFFFF !important;
    margin-right: 10%;
    margin-left: 10%;
    text-transform: capitalize;
}
  .infolay {
    text-align: center;
    color: #FFFFFF !important;
    margin-right: 10%;
    margin-left: 10%;
    text-transform: lowercase;
  }

</style>
