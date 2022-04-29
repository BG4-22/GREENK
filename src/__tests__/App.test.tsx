import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).toHaveLength(1);
    });
});
