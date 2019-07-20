<template>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
    <v-flex xl4 lg4 md12 sm12 xs12>
      <div>
        <v-toolbar flat color="amber">
            <v-spacer></v-spacer>
          <v-toolbar-title>Novos juices cadastrados</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-data-table hide-headers hide-actions :items="juices" item-key="name">
          <template v-slot:items="props">
            <tr @click="detalharFabricante(props.item)">
              <td>{{ props.item.marca }}</td>
              <td class="text-xs-center">{{ props.item.liquido }}</td>
              <td class="text-xs-center"><v-icon>open_in_new</v-icon></td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>Peek-a-boo!</v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </div>
    </v-flex>
    <v-flex xl4 lg4 md12 sm12 xs12>
      <div>
        <v-toolbar flat color="amber">
            <v-spacer></v-spacer>
          <v-toolbar-title>Novos videos cadastrados</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-data-table hide-headers hide-actions :items="videos"  item-key="name">
          <template v-slot:items="props">
            <tr @click="detalharFabricante(props.item)">
              <td>{{ props.item.youtuber }}</td>
              <td>{{ props.item.video }}</td>
              <td class="text-xs-left"><v-icon>open_in_new</v-icon></td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>Peek-a-boo!</v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </div>
    </v-flex>
    <v-flex xl4 lg4 md12 sm12 xs12>
      <div>
        <v-toolbar flat color="amber">
            <v-spacer></v-spacer>
          <v-toolbar-title>Novas promoções</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-data-table hide-headers hide-actions :items="promo" :search="search" item-key="name">
          <template v-slot:items="props">
            <tr @click="detalharFabricante(props.item)">
              <td>{{ props.item.marca }}</td>
              <td class="text-xs-center">{{ props.item.descicao }}</td>
              <td class="text-xs-center"><v-icon>open_in_new</v-icon></td>
            </tr>
          </template>
          <template v-slot:expand="props">
            <v-card flat>
              <v-card-text>Peek-a-boo!</v-card-text>
            </v-card>
          </template>
        </v-data-table>
      </div>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { videos, promo, juices } from "../api/inicio.js";

export default {
  data() {
    return {
      videos: videos,
      promo: promo,
      juices: juices
    };
  },

  methods: {
    detalharFabricante(detalhesFabricante) {
      console.log("fabricante !!", detalhesFabricante);
      this.dialogDetalheDoJuice = true;
      this.detalheDoFabricante = detalhesFabricante;
    }
  }
}
</script>
