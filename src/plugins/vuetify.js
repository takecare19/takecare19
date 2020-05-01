import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2b3545',
        secondary: '#dbefee',
        accent: '#8c9eff',
        error: '#e86137',
        success: '#90A15F'
      }
    }
  }
})
