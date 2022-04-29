import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../pages/home/Home';
import SolarPanelComponent from '../components/solarpanel/SolarPanelComponent';
import HomeWelcomeComponent from '../pages/home/Home';
import Scoreboard from '../components/game/Scoreboard';
import Competition from '../components/competition';
import FunfactSlideshow from '../components/funfacts/funfact-slideshow';

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
