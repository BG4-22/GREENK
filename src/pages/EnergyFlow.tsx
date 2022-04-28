import { Center } from '@chakra-ui/react';
import Energiflyt from 'assets/videos/Energyflow-video.mp4';

/**
 * Video-component to show energyflow. A centered video-element.
 */

const EnergyFlow: React.FC = () => {
    return (
        <Center margin={'75px auto'}>
            <video width="75%" autoPlay loop style={{ borderRadius: '40px' }}>
                <source src={Energiflyt} type="video/mp4"></source>
            </video>
        </Center>
    );
};

export default EnergyFlow;
