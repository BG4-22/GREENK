import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import cloudIcon from '../../assets/images/cloudIcon.svg';
import sunIcon from '../../assets/images/sunIcon.svg';

export interface WeatherPropsI {
    sun: boolean;
    cloud: boolean;
}

function weatherUpdateToAnimation(
    w1: WeatherPropsI | undefined,
    w2: WeatherPropsI
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
const Weather: React.FC<WeatherPropsI> = (weather: WeatherPropsI) => {
    const sunVariants = {
        sunIn: {
            rotate: [90, 270],
            transition: {
                duration: 1,
            },
        },
        sunOut: {
            rotate: [270, 450],
            transition: {
                duration: 1,
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
            x: ['-200%', '0%'],
            transition: {
                duration: 1,
            },
        },
        cloudOut: {
            x: ['0%', '200%'],
            transition: {
                duration: 1,
            },
        },
        cloud: {
            x: ['0%', '0%'],
            transition: {
                duration: 0,
            },
        },
        noCloud: {
            x: ['-200%', '-200%'],
            transition: {
                duration: 1,
            },
        },
        // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    };
    const prevWeatherRef = useRef<WeatherPropsI>();
    useEffect(() => {
        //assign the ref's current value to the count Hook
        prevWeatherRef.current = weather;
    }, [weather]);

    const [sunAnime, cloudAnime]: string[] = weatherUpdateToAnimation(
        prevWeatherRef.current,
        weather
    );
    return (
        <Box id={'weatherBox'} w={'100%'} h={'100%'}>
            <motion.img
                className={'cloud'}
                src={cloudIcon}
                animate={cloudAnime}
                variants={cloudVariants}
            />
            <motion.div
                className={'sun-container'}
                animate={sunAnime}
                variants={sunVariants}>
                <img src={sunIcon} className={'sun'} alt={'sun'} />
            </motion.div>
        </Box>
    );
};

export default Weather;
