import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookie from 'vue-cookie'

//Buefy
import Buefy from 'buefy'

//CSS Buefy
import 'buefy/dist/buefy.css'

//Config

Vue.use(VueCookie)
Vue.use(Buefy, {
  defaultDayNames: ['D', 'L', 'M', 'Mi', 'J', 'V', 'S'],
  defaultMonthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  defaultFirstDayOfWeek: 1,
  defaultDateFormatter: date => date.toLocaleDateString('es-ES')
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
