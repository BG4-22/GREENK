import Carousel from 'components/carousel/Carousel';
import EnergySources from 'components/statistics/EnergySources';

const Statistics: React.FC = () => {
    //Set the components that will be shown on the Statistics site
    const statComponents = [
        // <OverallCon />,
        // <HeatPump />,
        // <SolarPanel />,
        // <DiagramMoney />,
        <EnergySources />,
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    return <Carousel navButtons={'default'}>{statComponents}</Carousel>;
};

export default Statistics;
