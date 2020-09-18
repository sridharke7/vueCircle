import App from '../src/App.vue'
import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils'

describe('Testing App component', () => {
    it('checks textcontent to Hello ', () => {
        const wrapper = mount(App); //returns instance of the component.
        //accessing dom element and checks textcontent
        expect(wrapper.findAll('h1').exists()).toBe(true)
    })
})

function increment() {
    let count = 0
    count += 1;
  }

describe('Testing native dom events', () => {
    const wrapper = shallowMount(App);

    it('calls increment method when button is clicked', () => {
        const increment = jest.fn(); // mock function
        // updating method with mock function
        wrapper.setMethods({ increment });
        //find the button and trigger click event
        wrapper.find('button').trigger('click');
        increment();
        expect(increment).toHaveBeenCalled();
    })
})
