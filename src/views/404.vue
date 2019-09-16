<template>
  <v-container>
    <v-flex>
        <h1 class="img-wrapper">404 - Pagina não encontrada </h1>
      </v-flex>
    <div class="img-wrapper">
      
      <vue-video-section
        :elementId="'header-background-video'"
        :ref="'header-background-video'"
        :mp4Source="require('./../../public/404/play.mp4')"
        :mobileBreakpoint="992"
        :desktopHeight="550"
        :mobileHeight="450"
        :playsinline="true"
        :loop="true"
        :autoplay="true"
        :autobuffer="true"
        :muted="false"
      >
      </vue-video-section>

    </div>
  </v-container>
</template>

<script>
import VueVideoSection from "vue-video-section";

export default {
  components: {
    VueVideoSection
    }
}
</script>

<style>

.img-wrapper{
  justify-content: center;
  display: flex;
}
</style>