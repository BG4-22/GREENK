import { Center } from '@chakra-ui/react';
import Energiflyt from '../../assets/EnergiflytNidarvoll.mp4';

const EnergyFlow: React.FC = () => {
    return (
        <>
            <Center>
                <video
                    width="90%"
                    autoPlay
                    loop
                    style={{ borderRadius: '40px' }}>
                    <source src={Energiflyt} type="video/mp4"></source>
                </video>
            </Center>
        </>
    );
};

export default EnergyFlow;
