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

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyA9NyjWH2-hZ8Ir37DM-8MKHedB4_XmU3I',
    key: 'AIzaSyBsaxPBy3fJoc3cMmjXPQzDWn1gvUE3MKU',
    libraries: 'places'
    // region: 'VI',
    // language: 'vi'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
