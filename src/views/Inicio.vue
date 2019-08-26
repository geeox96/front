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
        <tr v-for="item in arrayVideo" :key="item.name" @click='abriryout(item.titulo)'>
          <td class="text-left">{{ item.titulo }}</td>
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
import axios from 'axios'

export default {
  data() {
    return {
      juice: juice,
      video: video,
      promocao: promocao,
      arrayVideo: [],
      canals: ['UCDoNiXA3roloV7Bxii7vj4w', 'UCASQ80aBk8Z7AA_lZumL_Uw', 'UCS0raihlsEeYuyVxY3gacFg', 'UCsF62wfb5h_R1qQxqTp1y2A', 'UCjMlpjqeLlG9bPIuYkYgItw']
    };
  },

  methods: {
      ola(msg) {
          alert(msg)
      },

      abriryout(url) {
        window.open(url);
      },

      chamarLista(){
        let videos = []

        for (let i in this.canals) {
          videos.push(this.apiYT(this.canals[i]))
          this.arrayVideo.push(videos)
        }

        console.log('array videos', this.arrayVideo)

      },

      apiYT(canal) {
        let videos 
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${canal}&maxResults=3&order=date&key=AIzaSyD0S6vvyaelWBmlcqA5YdfniAhgpiUZNj4`)
            .then((response) =>{
              response.data.items.map(infos => {
                videos = ( {
                  idCanal: infos.snippet.channelId,
                  nomeCanal: infos.snippet.channelTitle,
                  idVideo: infos.id.videoId,
                  titulo: infos.snippet.title,
                  descricao: infos.snippet.description,
                  dataPublicacao: infos.snippet.publishedAt,
                  img: infos.snippet.thumbnails.medium.url
                })
              })
            })
            .catch((error) => console.log(error))
            return videos
      },
  },

  created() {
  },

}
</script>

<style>

.alo {
  color: aqua
}

</style>
