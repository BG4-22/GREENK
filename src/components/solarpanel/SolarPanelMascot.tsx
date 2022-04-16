import { Box, Text } from '@chakra-ui/react';
import getSolarPanelEffect from 'api/getSolarPanelEffect';
import Mascot from '../../assets/images/Mascot.svg';
import SolarPanelComponent from './SolarPanelComponent';

const SolarPanelMascot = () => {
    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';

    return (
        <>
            <SolarPanelComponent />
            <img src={Mascot} alt="Mascot" id={'mascot'} />
            <Box id={'solarInfo'}>
                <Text>
                    Solcellene genererer <Text>{effect}</Text> kWh nå!!
                </Text>
            </Box>
        </>
    );
};
export default SolarPanelMascot;
