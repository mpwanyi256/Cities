import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/home/Loading.vue'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(Loading, {
    stubs: ['v-progress-circular']
  })
})

describe('Loading.vue test suite', () => {
  it('Tests if the component is correctly rendered', () => {
    expect(wrapper.classes()).toContain('loading')

    const progressLinear = wrapper.find('v-progress-circular')
    expect(progressLinear).toBeTruthy()
  })
})
