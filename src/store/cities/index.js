import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cities: {},
    search: '',
    selectedCity: null,
    loading: false
  },
  mutations: {
    setSearchVal (state, searchInput) {
      state.search = searchInput
    },
    setCity (state, city) {
      state.selectedCity = city
    },
    setCities (state, cities) {
      state.cities = cities
    },
    toggleLoading (state, status) {
      state.loading = status
    }
  },
  actions: {
    fetchCities ({ commit }) {
      commit('toggleLoading', true)
      axios.get('cities/')
        .then(response => {
          commit('setCities', response.data)
        })
        .catch((e) => {
          console.error('Something went wrong while fetching cities', e)
        })
        .finally(() => {
          commit('toggleLoading', false)
        })
    }
  },
  getters: {
    cities: (state) => state.cities,
    search: (state) => state.search,
    selectedCity: (state) => state.selectedCity,
    loading: (state) => state.loading
  }
}
