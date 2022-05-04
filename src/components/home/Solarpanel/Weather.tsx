import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import cloudIcon from '../../../assets/images/cloudIcon.svg';
import sunIcon from '../../../assets/images/sunIcon.svg';

/**
 * boolean states for either showing or not showing the sun and the coud
 */
export interface WeatherPropsI {
    sun: boolean;
    cloud: boolean;
}

/**
 *  these are the states of the solar panel animation on the home-screen
 *
 * @param w1 the last state of the weather
 * @param w2 the next state of the weather
 * @returns keys for the sun and cloud animation variants
 */
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

// variants for animating following a semicircle for the in and out animations
const sunVariants = {
    sunIn: {
        rotate: [90, 270],
        opacity: [0, 0, 1],
        transition: {
            duration: 1,
        },
    },
    sunOut: {
        rotate: [270, 450],
        opacity: [1, 0, 0],
        transition: {
            duration: 1,
        },
    },
    sun: {
        opacity: 1,
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

// variants for animating the cloud in and out of the component along the x-axis
const cloudVariants = {
    cloudIn: {
        x: ['-200%', '10%'],
        opacity: [0, 0, 1],
        transition: {
            duration: 1,
        },
    },
    cloudOut: {
        x: ['10%', '200%'],
        opacity: [1, 0, 0],
        transition: {
            duration: 1,
        },
    },
    cloud: {
        opacity: 1,
        x: ['10%', '10%'],
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
};

const Weather: FC<WeatherPropsI> = (weather: WeatherPropsI) => {
    // get the weather state from previous render
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
        <Box mb={'-20px'} id={'weather-box'}>
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
