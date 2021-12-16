import { shallowMount, createLocalVue } from '@vue/test-utils'
import Cities from '@/components/home/Cities.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  cities: [
    {
      name: 'Sydney',
      name_native: 'Sydney',
      country: 'Australia',
      continent: 'Australia',
      latitude: '-33.865143',
      longitude: '151.209900',
      population: '5312000',
      founded: '1788',
      image: 'https://media.timeout.com/images/103161245/750/422/image.jpg',
      landmarks: [
        'Sydney Opera House',
        'Sydney Harbour Bridge',
        'Queen Victoria Building'
      ]
    }
  ],
  citiesCount: 1,
  search: '',
  selectedCity: null
}

const mutations = {
  setCity (state, city) {
    state.selectedCity = city
  }
}

const getters = {
  search: (state) => state.search,
  cities: (state) => state.cities,
  citiesCount: (state) => state.citiesCount
}

const actions = {
  fetchCities: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    cities: {
      namespaced: true,
      state,
      mutations,
      getters,
      actions
    }
  }
})

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Cities, {
    localVue,
    store,
    stubs: ['CitiesCount', 'CitiesListing']
  })
})

describe('Cities.vue test suite', () => {
  it('Tests for component main class and imported components', () => {
    const mainDiv = wrapper.find('.cities-view')
    expect(mainDiv).toBeTruthy()

    const CitiesCountComponent = wrapper.find('CitiesCount')
    expect(CitiesCountComponent).toBeTruthy()

    const CitiesListingComponent = wrapper.find('CitiesListing')
    expect(CitiesListingComponent).toBeTruthy()
  })

  it('Tests filteredSearch computed prop', async () => {
    state.search = 'Kampala'
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.search).toEqual('Kampala')
  })

  it('Tests the created hook', async () => {
    await wrapper.vm.$nextTick()
    expect(state.selectedCity).toBe(state.cities[0])
  })
})
