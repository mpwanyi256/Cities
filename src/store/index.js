import Vue from 'vue'
import Vuex from 'vuex'
import cities from './cities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cities
  }
})
