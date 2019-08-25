<template>
  <v-container>
      <span>painel !!! </span>
  <v-btn @click="deslogar"> DESLOGAR </v-btn>
  </v-container>
</template>

<script>
export default {
data() {
    return {
        
    }
},

methods: {
    deslogar() {
        localStorage.removeItem('token')
        location.reload()
    }
},

mounted() {
    
  }
}
</script>

<style>

</style>