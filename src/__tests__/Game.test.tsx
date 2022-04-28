import Game from '../pages/Game';
import { shallow } from 'enzyme';

describe('<Game />', () => {
    const wrapper = shallow(<Game />);

    it('renders correctly', () => {
        expect(wrapper.childAt(0).text()).toEqual('Hva bruker mest energi?');
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find('GameSlide')).toHaveLength(2);
        expect(wrapper.find('Button')).toHaveLength(2);
        expect(wrapper.find('Button').at(0).text()).toEqual('Mer');
        expect(wrapper.find('Button').at(1).text()).toEqual('Mindre');
    });

    it('answer buttons work', () => {
        const secondSlideAnswered = wrapper.find('GameSlide').at(1).props();
        wrapper.find('Button').at(0).simulate('click');
        expect(wrapper.find('GameSlide').at(1).props()).not.toEqual(
            secondSlideAnswered
        );
    });
});
