import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

describe('<App />', () => {
    test('Should render correctly', () => {
        const wrapper = shallow(<App />);
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).toHaveLength(1);
    });
});
