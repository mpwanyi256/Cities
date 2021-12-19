import { shallowMount, createLocalVue } from '@vue/test-utils'
import City from '@/components/home/City.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const state = {
  selectedCity: null
}

const mutations = {
  setCity (state, city) {
    state.selectedCity = city
  }
}

const getters = {
  selectedCity: (state) => state.selectedCity
}

const actions = {
  getCityDetails: jest.fn()
}

const store = new Vuex.Store({
  modules: {
    cities: {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }
  }
})

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

let wrapper
beforeEach(() => {
  wrapper = shallowMount(City, {
    propsData: {
      city
    },
    stubs: ['v-icon', 'v-img'],
    localVue,
    store
  })
})

describe('City.vue test suite', () => {
  it('tests for component base classes and components', () => {
    expect(wrapper.classes()).toContain('city')

    // Classes
    const allDivs = wrapper.findAll('div')
    expect(allDivs.at(1).classes()).toContain('image-wrap')
    expect(allDivs.at(2).classes()).toContain('city-info')

    // components
    const imageView = wrapper.find('v-img')
    expect(imageView).toBeTruthy()

    const iconComponent = wrapper.find('v-icon')
    expect(iconComponent).toBeTruthy()
  })

  it('Tests for the viewCityOnMap method', async () => {
    wrapper.vm.viewCityOnMap = jest.fn()

    const spy = jest.spyOn(wrapper.vm, 'getCityDetails')
    const mainDiv = wrapper.find('.city')
    mainDiv.trigger('click')
      .then(() => {
        expect(spy).toHaveBeenCalled()
      })
      .catch(e => {
        console.log('Error', e)
      })
  })
})
