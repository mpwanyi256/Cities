import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const city = {
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

const state = {
  selectedCity: city,
  cities: [{ ...city }],
  citiesCount: 1,
  search: '',
  loading: false
}

const getters = {
  selectedCity: (state) => state.selectedCity,
  citiesCount: (state) => state.citiesCount,
  loading: (state) => state.loading
}

const actions = {
  fetchCities: jest.fn().mockReturnValue(() => {
    return {
      cities: [{ ...city }],
      count: 0
    }
  })
}

const store = new Vuex.Store({
  modules: {
    cities: {
      namespaced: true,
      state,
      getters,
      actions
    }
  }
})

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Home, {
    localVue,
    store,
    stubs: ['Cities', 'MapView']
  })
})

describe('Home.vue test suite', () => {
  it('Tests if the component was correctly rendered', () => {
    expect(wrapper.classes()).toContain('home')

    const classListingDiv = wrapper.find('.cities-listing')
    expect(classListingDiv).toBeTruthy()

    const mapViewDiv = wrapper.find('.cities-overview')
    expect(mapViewDiv).toBeTruthy()
  })

  it('Tests if imported components were rendered', () => {
    const citiesComponent = wrapper.find('Cities')
    expect(citiesComponent).toBeTruthy()

    const mapViewComponent = wrapper.find('MapView')
    expect(mapViewComponent).toBeTruthy()
  })

  it('Tests selectedCity computed prop', async () => {
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.selectedCity).toBe(city)
  })
})
