import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import eventBus from './plugins/event-bus'
import EventBusCallbacks from './plugins/Eventbus'

Vue.use(EventBusCallbacks, eventBus)

Vue.prototype.$eventBus = eventBus

const VueGoogleMaps = require('vue2-google-maps')

console.log('Map API key', process.env)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY,
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
