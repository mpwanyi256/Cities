import { shallowMount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/nav/Navbar.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const routes = [
  {
    path: '/',
    name: 'home'
  }
]

const router = new VueRouter({
  routes
})

const state = {
  loading: false
}

const getters = {
  loading: (state) => state.loading
}

const store = new Vuex.Store({
  modules: {
    cities: {
      namespaced: true,
      state,
      getters
    }
  }
})

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Navbar, {
    localVue,
    store,
    router,
    stubs: ['router-link', 'v-img']
  })
})

describe('Navbar test suite', () => {
  it('tests if base class exists', () => {
    expect(wrapper.classes()).toContain('nav_bar')

    const allDivs = wrapper.findAll('div')
    expect(allDivs.at(1).classes()).toContain('logo-area')
    expect(allDivs.at(2).classes()).toContain('auth-card-area')
  })

  it('tests if NavSearchArea component exists', () => {
    const navComponent = wrapper.find('NavSearchArea')
    expect(navComponent).toBeTruthy()
  })
})
