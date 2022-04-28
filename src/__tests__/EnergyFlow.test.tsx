import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import EnergyFlow from '../pages/EnergyFlow';

describe('<EnergyFlow />', () => {
    const wrapper = shallow(<EnergyFlow />);
    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).toHaveLength(1);
    });

    it('contains video-element', () => {
        expect(wrapper.find(<video></video>)).toBeDefined();
    });
});
