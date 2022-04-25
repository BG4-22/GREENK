import Carousel from 'components/carousel/Carousel';
import DiagramMoney from 'components/DiagramMoney';
import EnergySources from 'components/statistics/EnergySources';
import HeatPump from 'components/statistics/HeatPump';
import OverallCon from 'components/statistics/OverallCon';
import SolarPanel from 'components/statistics/SolarPanel';

const Statistics: React.FC = () => {
    //Set the components that will be shown on the Statistics site
    const statComponents = [
        <OverallCon />,
        <HeatPump />,
        <SolarPanel />,
        <DiagramMoney />,
        <EnergySources />,
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    return <Carousel navButtons={'default'}>{statComponents}</Carousel>;
};

export default Statistics;
