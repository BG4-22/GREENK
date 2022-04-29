import Navbar from '../layout/Navbar/Navbar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link } from 'react-router-dom';

describe('<Navbar />', () => {
    const wrapper = shallow(<Navbar />);

    it('Should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).toHaveLength(1);
    });

    it('Should include home-button', () => {
        const home = wrapper.find('Hjem');
        expect(home).toBeDefined();
    });

    it('Should include energyflow-button', () => {
        const statistics = wrapper.find('Energiflyt');
        expect(statistics).toBeDefined();
    });

    it('Should include statistics-button', () => {
        const statistics = wrapper.find('Statistikk');
        expect(statistics).toBeDefined();
    });
});
