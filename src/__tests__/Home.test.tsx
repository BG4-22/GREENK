import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../pages/Home/Home';
import SolarPanelComponent from '../components/home/Solarpanel/SolarPanelComponent';
import HomeWelcomeComponent from '../pages/Home/Home';
import Scoreboard from '../components/home/Scoreboard';
import Competition from '../components/home/Competition';
import FunfactSlideshow from '../components/home/Funfacts';

describe('<Home />', () => {
    const wrapper = shallow(<Home />);
    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Should render every component on the page', () => {
        expect(wrapper.find(<SolarPanelComponent />)).toBeDefined();
        expect(wrapper.find(<HomeWelcomeComponent />)).toBeDefined();
        expect(wrapper.find(<Scoreboard />)).toBeDefined();
        expect(
            wrapper.find(<Competition data={[]} unitOfMeasure="" />)
        ).toBeDefined();
        expect(wrapper.find(<FunfactSlideshow funfacts={[]} />)).toBeDefined();
    });
});
