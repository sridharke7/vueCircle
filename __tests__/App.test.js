import App from '../src/App.vue'
import { mount } from '@vue/test-utils'

describe('Testing App component', () => {
    it('checks textcontent to Hello ', () => {
        const wrapper = mount(App); //returns instance of the component.
        //accessing dom element and checks textcontent
        expect(wrapper.findAll('h1').exists()).toBe(true)
    })
})