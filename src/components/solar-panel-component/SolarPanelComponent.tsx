import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import cloudIcon from '../../assets/cloudIcon.svg';
import './SolarPanelComponent.css';

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
    const containerStyles =
        'w-96 h-96 relative flex flex-col justify-center align-middle bg-slate-400 overflow-hidden rounded-2xl m-auto';
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
    const msg = 'skrtskrt';
    return (
        <Box
            display={'flex'}
            pos={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDir={'column'}
            overflow={'hidden'}
            borderRadius={'2em'}
            margin={'auto'}
            h={'24rem'}
            w={'24rem'}
            border={'2px solid green'}>
            <motion.div
                className={'sun-container'}
                animate={sunAnime}
                style={{ transform: 'rotate(90deg)' }}
                variants={sunVariants}>
                <motion.div className={'sun'} />
            </motion.div>
            <motion.img
                className={'cloud'}
                src={cloudIcon}
                animate={cloudAnime}
                variants={cloudVariants}
            />
            <Text margin={'auto auto 2rem auto'}>{msg}</Text>
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
    return (
        <>
            <Weather {...weather} />
            <Stack spacing={4} direction="row" align="center">
                <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => updateWeather(true, false)}>
                    Sol :)
                </Button>
                <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => updateWeather(false, true)}>
                    Sky ://
                </Button>
                <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => updateWeather(true, true)}>
                    Sol og Sky ://))
                </Button>
                <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => updateWeather(false, false)}>
                    Ingenting xD
                </Button>
            </Stack>
        </>
    );
};

export default SolarPanelComponent;
