import Carousel from '../components/carousel/Carousel';
import { shallow } from 'enzyme';
import OverallCon from '../components/statistics/OverallConsumption';
import DiagramMoney from '../components/statistics/DiagramMoney';

describe('<Carousel />', () => {
    const wrapper = shallow(
        <Carousel navButtons="small-buttons">
            <OverallCon />
            <DiagramMoney />
        </Carousel>
    );

    it('can switch between elements in the carousel', () => {
        const firstElement = wrapper.childAt(0).childAt(0).children();
        wrapper.find('IoMdArrowDropright').simulate('click');
        expect(wrapper.childAt(1).childAt(0).children()).not.toEqual(
            firstElement
        );
    });
});
