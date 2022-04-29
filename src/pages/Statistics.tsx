import Carousel from '../components/common/Carousel';
import DiagramMoney from '../components/statistics/DiagramMoney';
import EnergySources from '../components/statistics/EnergySources';
import HeatPump from '../components/statistics/HeatPump';
import OverallCon from '../components/statistics/OverallConsumption';
import SolarPanel from '../components/statistics/SolarPanel';

/**
 * statComponents consist of all intended components to add in the carousel, and is added
 * as children in the carousel.
 * @returns Carousel component with all intended children-components.
 */

const Statistics: React.FC = () => {
    //Set the components that will be shown on the Statistics site
    const statComponents = [
        <OverallCon key={'consumption'} />,
        <HeatPump key={'Heat pump'} />,
        <SolarPanel key={'Solar panel'} />,
        <DiagramMoney key={'Money diagram'} />,
        <EnergySources key={'Energy sources'} />,
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    return <Carousel navButtons={'default'}>{statComponents}</Carousel>;
};

export default Statistics;
