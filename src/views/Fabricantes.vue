<template>
  <v-container>
    <div>
      <v-toolbar flat color="white">
        <v-toolbar-title>Lista de fabricantes cadastrados</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-toolbar>
      <v-data-table :headers="headers" :items="fabricantes" :search="search" item-key="name">
        <template v-slot:items="props">
          <tr @click="detalharFabricante(props.item)">
            <td>{{ props.item.nome }}</td>
            <td class="text-xs-center">{{ props.item.estado }}</td>
            <td class="text-xs-center">{{ props.item.quantidadeJuice }}</td>
            <td class="text-xs-center">
              <v-icon>open_in_new</v-icon>
            </td>
          </tr>
        </template>
        <template v-slot:expand="props">
          <v-card flat>
            <v-card-text>Peek-a-boo!</v-card-text>
          </v-card>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<script>
import { fabricantes } from "../api/fabricantes";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nome da marca",
          align: "left",
          sortable: false,
          value: "nome"
        },
        {
          text: "Estado",
          align: "center",
          value: "estado",
          sortable: false
        },
        {
          text: "Qnt de sabores",
          align: "center",
          value: "quantidadeJuice",
          sortable: false
        },
        {
          text: "Acessar",
          align: "center",
          value: "site",
          sortable: false
        }
      ],
      fabricantes: fabricantes,
      detalheDoFabricante: null,
      dialogDetalheDoJuice: false
    };
  },

  methods: {
    detalharFabricante(detalhesFabricante) {
      console.log("fabricante !!", detalhesFabricante);
      this.dialogDetalheDoJuice = true;
      this.detalheDoFabricante = detalhesFabricante;
    }
  }
};
</script>

<style>
</style>
