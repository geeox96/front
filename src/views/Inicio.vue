<template>
<v-container grid-list-xl fluid>
<v-layout align-center justify-space-around row >
<v-flex xl4>
 <v-simple-table class="primary" height="300" dark fixed-header>
      <thead>
        <tr>
          <th class="text-left">Juice</th>
          <th class="text-right">Fabricante</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in juice" :key="item.name" @click='ola(item.msg)'>
          <td class="text-left">{{ item.liquido }}</td>
          <td class="text-right">{{ item.fabricante }}</td>
        </tr>
      </tbody>
    </v-simple-table>
</v-flex>

<v-flex xl4>
 <v-simple-table class="primary" height="300" dark fixed-header>
      <thead>
        <tr>
          <th class="text-left">Canal YouTube</th>
          <th class="text-right">Video</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in video" :key="item.name" @click='abriryout(item.link)'>
          <td class="text-left">{{ item.youtuber }}</td>
          <td class="text-right">{{ item.video }}</td>
        </tr>
      </tbody>
    </v-simple-table>
</v-flex>

<v-flex xl4>
 <v-simple-table class="primary" height="300" dark fixed-header>
      <thead>
        <tr>
          <th class="text-left">Fabricante</th>
          <th class="text-right">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in promocao" :key="item.name" @click='ola(item.msg)'>
          <td class="text-left">{{ item.fabricante }}</td>
          <td class="text-right">{{ item.descicao }}</td>
        </tr>
      </tbody>
    </v-simple-table>
</v-flex>
</v-layout>
</v-container>

</template>

<script>
import { juice, video, promocao } from "../api/inicio";
export default {
     data() {
    return {
      juice: juice,
      video: video,
      promocao: promocao
    };
  },

  methods: {
      ola(msg) {
          alert(msg)
      },
      abriryout(url) {
        window.open(url);
      }
  }

}
</script>

<style>

.alo {
  color: aqua
}

</style>
