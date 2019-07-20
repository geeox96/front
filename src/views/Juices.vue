<template>
  <div>
    <v-container fluid grid-list-xl text-xs-center>
      <v-layout justify-center row wrap>
        <v-flex xl2 lg3 md5 sm6 xs6 v-for="liquido in juices" :key="liquido.id">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 12 : 2}`"
              class="card-juice ma-3"
              @click="abrirDialogDetalhes(liquido)"
            >
              <v-toolbar-title>{{liquido.nome}}</v-toolbar-title>
              <v-divider></v-divider>
              <v-flex>
                <!-- contain -->
                <v-img style="margin-bottom: 5%" :aspect-ratio="9/11" lazy-src :src="liquido.img">
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="ml-2 d-flex transition-fast-in-fast-out display-1 v-card--reveal white--text alo"
                    >VER MAIS</div>
                  </v-expand-transition>
                </v-img>
                <div>Fabricante: {{ liquido.fabricante }}</div>
                <v-card-text>{{liquido.descricao}}</v-card-text>Valor:
                <span v-text="liquido.valor"></span>
              </v-flex>
              <v-divider></v-divider>
              <v-layout>
                <v-chip class="ml-3" color="orange" text-color="white">Frutado</v-chip>
              </v-layout>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
      <detalhe :abrir="dialogDetalheDoJuice" :liquido="detalheDoJuice" @fechar="fechaDialog" />
    </v-container>
  </div>
</template>

<script>
import { juices } from "../api/juices";
import DialogDetalhesJuice from "../components/dialog-detalhes-juice";

export default {
  components: {
    detalhe: DialogDetalhesJuice
  },

  data() {
    return {
      juices: juices,
      dialogDetalheDoJuice: false
    };
  },

  methods: {
    abrirDialogDetalhes(juice) {
      this.dialogDetalheDoJuice = true;
      this.detalheDoJuice = juice;
    },
    fechaDialog() {
      this.dialogDetalheDoJuice = false;
    }
  }
};
</script>

<style>
.card-juice {
  border-radius: 10px;
}

.alo {
  text-shadow: 1px 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    -1px -1px 0 #000, 1px 0px 0 #000, 0px 1px 0 #000, -1px 0px 0 #000,
    0px -1px 0 #000;
  /* font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif !important; */
}
</style>
