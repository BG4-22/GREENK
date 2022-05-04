import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import getSolarPanelEffect from '../../../api/getSolarPanelEffect';
import Mascot from './Mascot';
import './SolarPanelComponent.css';
import Weather, { WeatherPropsI } from './Weather';

/**
 * This component consists of the Mascot svg-component and the weather component. Based on
 * the effect value, the svg of the sun and cloud will change appearance.
 */

export interface SolarPanelComponentPropsI {
    effect: number;
}

const SolarPanelComponent: React.FC = () => {
    const effect = getSolarPanelEffect();
    // these values should be updated to fit real-time data
    // show the sun if the effect is higher than 6
    const isSunny = (effect: number) => effect > 6;
    // show the cloud if the effect is lower than 12
    const isCloudy = (effect: number) => effect < 12;

    // state to controll the weather
    const [weather, setWeather] = useState<WeatherPropsI>({
        sun: isSunny(effect),
        cloud: isCloudy(effect),
    });

    // setter to update weather
    const updateWeather = (sun: boolean, cloud: boolean): void => {
        setWeather({ sun, cloud });
    };

    useEffect(() => {
        updateWeather(isSunny(effect), isCloudy(effect));
    }, [effect]);

    return (
        <Box
            mb={'20px'}
            h={'100%'}
            w={'100%'}
            pos={'relative'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'flex-end'}>
            <Weather {...weather} />
            <Mascot effect={effect} />
        </Box>
    );
};

export default SolarPanelComponent;
