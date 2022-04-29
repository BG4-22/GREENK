import Carousel from '../components/carousel/Carousel';
import { shallow } from 'enzyme';
import Statistics from '../pages/Statistics';
import OverallCon from '../components/statistics/OverallConsumption';
import DiagramMoney from '../components/statistics/DiagramMoney';
import SolarPanel from '../components/statistics/SolarPanel';
import Heatpump from '../components/statistics/HeatPump';
import EnergySources from '../components/statistics/EnergySources';

describe('<Statistics />', () => {
    const wrapper = shallow(<Statistics />);

    // No snapshot here as the first carousel-element is random
    it('renders correctly', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('contains carousel + all 5 components', () => {
        expect(wrapper.children()).toHaveLength(5);
        expect(wrapper.find(<OverallCon />)).toBeDefined();
        expect(wrapper.find(<DiagramMoney />)).toBeDefined();
        expect(wrapper.find(<SolarPanel />)).toBeDefined();
        expect(wrapper.find(<Heatpump />)).toBeDefined();
        expect(wrapper.find(<EnergySources />)).toBeDefined();
    });
});
