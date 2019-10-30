import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Home from './Home';
configure({adapter: new Adapter()});

describe('Home', () => {

    test('Verifica se ao submit do form o loading é visto', () => {
        const wrapper = mount(<Home />);
        const input = wrapper.find('.text')
        input.simulate('change', { currentTarget: { value: 'Rua Américo Brasiliense' } })
        const form = wrapper.find('form')
        form.simulate('submit')
        expect(wrapper.find('.loading').exists()).toEqual(true);
    });
})
