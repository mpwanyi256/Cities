import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(App, {
    stubs: ['v-app', 'v-main', 'router-view']
  })
})

describe('App.vue test suite', () => {
  it('Tests if Navbar component exists', () => {
    const navBar = wrapper.find('Navbar')

    expect(navBar).toBeTruthy()
  })
})
