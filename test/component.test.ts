import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheCounter from '../src/components/TheCounter.vue'

describe('TheCounter.vue', () => {
  it('should render', () => {
    const wrapper = mount(TheCounter, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchSnapshot()
