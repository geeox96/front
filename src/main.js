import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.use(Vuetify, {
  theme: {
    primary: '#005b7c',
    secondary: '#008eab',
    accent: '##01bcc6'
  }
})