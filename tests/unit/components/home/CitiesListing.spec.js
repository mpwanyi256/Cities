import { shallowMount } from '@vue/test-utils'
import CitiesListing from '@/components/home/CitiesListing.vue'

const cities = [{
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
}]

let wrapper
beforeEach(() => {
  wrapper = shallowMount(CitiesListing, {
    stubs: ['City'],
    propsData: {
      cities
    }
  })
})

describe('CitiesListing.vue test suite', () => {
  it('Tests if component has been correctly mounted', () => {
    expect(wrapper.classes()).toContain('cities-listing')
    expect(wrapper.find('City')).toBeTruthy()
  })
})
