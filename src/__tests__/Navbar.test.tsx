import Navbar from '../layout/Navbar';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Navbar />', () => {
    const wrapper = shallow(<Navbar />);

    it('render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper).toHaveLength(1);
    });
});
