import { Box, Text } from '@chakra-ui/react';
import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Maskot from '../../assets/Maskot.svg';
import SolarPanelComponent from './SolarPanelComponent';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return (
        <>
            <SolarPanelComponent />
            <img
                src={Maskot}
                alt="Maskot"
                width={'80%'}
                style={{
                    marginBottom: '60px',
                    zIndex: '2',
                }}
            />
            <Box id={'solarInfo'}>
                <Text>
                    Solcellene genererer <Text>{effect}</Text> kWh nå :)
                </Text>
            </Box>
        </>
    );
};
export default SolarPanelMascot;
