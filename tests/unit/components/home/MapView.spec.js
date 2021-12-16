import { shallowMount } from '@vue/test-utils'
import MapView from '@/components/home/MapView.vue'

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
},
{
  name: 'Madrid',
  name_native: 'Madrid',
  country: 'Spain',
  continent: 'Europe',
  latitude: '40.416775',
  longitude: '-3.703790',
  population: '3223000',
  founded: '1083',
  image: 'https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/spain/madrid/destinations-madrid-banner-mobile-1024x553.jpg',
  landmarks: [
    'Royal Palace',
    'Plaza Mayor',
    'Plaza de Cibeles'
  ]
}
]

let wrapper
beforeEach(() => {
  wrapper = shallowMount(MapView, {
    propsData: {
      cities,
      selectedCity: null
    },
    data () {
      return {
        Coordinates: {
          lat: 10.3157,
          lng: 123.8854
        },
        zoom: 15
      }
    },
    stubs: ['GmapMap', 'GmapMarker']
  })
})

describe('MapView test suite', () => {
  it('Tests if component was correctly rendered', () => {
    expect(wrapper.classes()).toContain('map-view')

    const GmapMapComponent = wrapper.find('GmapMap')
    expect(GmapMapComponent).toBeTruthy()
  })

  it('Tests for when GmapMarker is rendered', async () => {
    const spy = jest.spyOn(wrapper.vm, 'toggleCity')
    const spy2 = jest.spyOn(wrapper.vm, 'cityCoordinates')

    wrapper.setProps({ selectedCity: cities[0] })
    await wrapper.vm.$nextTick()

    const GmapMarkerComponent = wrapper.find('GmapMarker')
    expect(GmapMarkerComponent).toBeTruthy()
    expect(spy).toHaveBeenCalled()
    expect(spy2).toHaveBeenCalled()
  })
})
