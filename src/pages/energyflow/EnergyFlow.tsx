import { Center } from '@chakra-ui/react';
import Energiflyt from '../../assets/Energiflyt_Nidarvoll.mp4';

const EnergyFlow: React.FC = () => {
    return (
        <Center margin={'20px auto'}>
            <video width="75%" autoPlay loop style={{ borderRadius: '40px' }}>
                <source src={Energiflyt} type="video/mp4"></source>
            </video>
        </Center>
    );
};

export default EnergyFlow;
