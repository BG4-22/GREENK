import { Box } from '@chakra-ui/react';
import getSolarPanelEffect from '../../api/getSolarPanelEffect';
import React, { useEffect, useState } from 'react';
import Mascot from '../solarpanel/Mascot';
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
    const isSunny = (effect: number) => effect > 6;
    const isCloudy = (effect: number) => effect < 12;
    const [weather, setWeather] = useState<WeatherPropsI>({
        sun: isSunny(effect),
        cloud: isCloudy(effect),
    });
    const updateWeather = (sun: boolean, cloud: boolean): void => {
        setWeather({ sun, cloud });
    };
    useEffect(() => {
        updateWeather(isSunny(effect), isCloudy(effect));
    }, [effect]);

    return (
        <Box
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
