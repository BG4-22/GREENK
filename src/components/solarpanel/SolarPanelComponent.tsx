import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import cloudIcon from 'assets/images/cloudIcon.svg';
import './SolarPanelComponent.css';
import getSolarPanelEffect from '../../api/getSolarPanelEffect';

interface Weather {
    sun: boolean;
    cloud: boolean;
}

function weatherUpdateToAnimation(
    w1: Weather | undefined,
    w2: Weather
): string[] {
    w1 = !w1 ? { sun: false, cloud: false } : w1;
    let sunState = '';
    let cloudState = '';
    if (w1.sun && w2.sun) {
        sunState = 'sun';
    } else if (w2.sun) {
        sunState = 'sunIn';
    } else if (w1.sun) {
        sunState = 'sunOut';
    } else {
        sunState = 'noSun';
    }
    if (w1.cloud && w2.cloud) {
        cloudState = 'cloud';
    } else if (w2.cloud) {
        cloudState = 'cloudIn';
    } else if (w1.cloud) {
        cloudState = 'cloudOut';
    } else {
        cloudState = 'noCloud';
    }
    return [sunState, cloudState];
}
const Weather: React.FC<Weather> = (weather: Weather) => {
    const sunVariants = {
        sunIn: {
            rotate: [90, 270],
            transition: {
                duration: 2,
            },
        },
        sunOut: {
            rotate: [270, 450],
            transition: {
                duration: 2,
            },
        },
        sun: {
            rotate: [270, 270],
            transition: {
                duration: 0,
                repeat: 0,
            },
        },
        noSun: {
            rotate: [90, 90],
            transition: {
                duration: 0,
            },
        },
    };
    const cloudVariants = {
        cloudIn: {
            x: ['-100%', '0%'],
            transition: {
                duration: 2,
            },
        },
        cloudOut: {
            x: ['0%', '100%'],
            transition: {
                duration: 2,
            },
        },
        cloud: {
            x: ['0%', '0%'],
            transition: {
                duration: 0,
            },
        },
        noCloud: {
            x: ['-100%', '-100%'],
            transition: {
                duration: 2,
            },
        },
        // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    };
    const prevWeatherRef = useRef<Weather>();
    useEffect(() => {
        //assign the ref's current value to the count Hook
        prevWeatherRef.current = weather;
    }, [weather]);

    const [sunAnime, cloudAnime]: string[] = weatherUpdateToAnimation(
        prevWeatherRef.current,
        weather
    );

    const effect = getSolarPanelEffect();

    const msg = 'Nidarvoll generer ' + effect + ' KWh nå :)';
    return (
        <Box
            display={'flex'}
            pos={'absolute'}
            margin={'0px 100px 100px 150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'row'}
            overflow={'hidden'}
            borderRadius={'2em'}
            h={'18rem'}
            w={'15rem'}>
            <motion.img
                className={'cloud'}
                src={cloudIcon}
                animate={cloudAnime}
                variants={cloudVariants}
                style={{ zIndex: '1' }}
            />
            <motion.div
                className={'sun-container'}
                animate={sunAnime}
                style={{ transform: 'rotate(90deg)', userSelect: 'none' }}
                variants={sunVariants}>
                <motion.div className={'sun'} />
            </motion.div>

            {/*             <Text margin={0}>{msg}</Text> */}
        </Box>
    );
};

const SolarPanelComponent: React.FC = () => {
    const [weather, setWeather] = useState<Weather>({
        sun: true,
        cloud: true,
    });
    const updateWeather = (sun: boolean, cloud: boolean): void => {
        setWeather({ sun, cloud });
    };
    return <Weather {...weather} />;
};

export default SolarPanelComponent;
