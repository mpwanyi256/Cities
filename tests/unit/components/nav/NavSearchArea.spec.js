import { mount, createLocalVue } from '@vue/test-utils'
import NavSearchArea from '@/components/nav/NavSearchArea.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  setSearchVal: jest.fn().mockImplementation((searchInput) => {
    state.search = searchInput
  })
}

const state = {
  search: ''
}

const store = new Vuex.Store({
  modules: {
    cities: {
      namespaced: true,
      mutations,
      state
    }
  }
})

let wrapper
beforeEach(() => {
  wrapper = mount(NavSearchArea, {
    localVue,
    store,
    data () {
      return {
        search: ''
      }
    }
  })
})

describe('NavSearchArea test suite', () => {
  it('Tests if the input element exists', () => {
    expect(wrapper.classes()).toContain('search_area')
  })

  it('Tests if the input element has a class search', () => {
    const inputElement = wrapper.find('input')
    expect(inputElement.classes()).toContain('search')
  })

  it('Tests for when a new search value is set', async () => {
    const spy = jest.spyOn(wrapper.vm, 'setSearchVal')
    wrapper.vm.search = 'Kampala'
    await wrapper.vm.$nextTick()
    expect(spy).toHaveBeenCalled()

    spy.mockReset()
    spy.mockRestore()
  })
})
