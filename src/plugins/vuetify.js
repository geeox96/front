import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    current: 'pt'
  },
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        text: '#ffffff',
        primary: "#424242",
        secondary: "#757575",
        accent: "#500e80",
        error: "#82264f"
      }
    }
  }
});
