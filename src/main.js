require("dotenv").config();
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { apolloClient } from "./plugins/graphql";
import Vue from "vue";
import { router } from "./router";
import store from "./store/store";

Vue.router = router;

Vue.config.productionTip = false;

new Vue({
  install(Vue) {
    apolloClient;
  },
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
