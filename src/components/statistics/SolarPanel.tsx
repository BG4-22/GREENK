import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Flex, Center, Spacer } from '@chakra-ui/react';

import getSolarPanelEffect from '../../api/getSolarPanelEffect';

import SolarPanelPhone from 'assets/images/stats/solarPanelPhone.png';
import NoBattery from 'assets/images/stats/battery/noBattery.png';
import LowBattery from 'assets/images/stats/battery/lowBattery.png';
import TwoBattery from 'assets/images/stats/battery/twoBattery.png';
import ThreeBattery from 'assets/images/stats/battery/threeBattery.png';
import FullBattery from 'assets/images/stats/battery/fullBattery.png';

const SolarPanel: React.FC = () => {
    //www.forbes.com/sites/christopherhelman/2013/09/07/how-much-energy-does-your-iphone-and-other-devices-use-and-what-to-do-about-it/
    /**
     * Constant variable for phones energy consumption
     */
    const phoneEnergy = 0.00545;
    const [batteryPic, setBatteryPic] = useState(NoBattery);
    const [index, setIndex] = useState<number>(0);

    /**
     * Calculates amout of phones that can be charged
     */
    const phoneCount = Math.floor(getSolarPanelEffect() / phoneEnergy);

    /**
     * List with battery pictures
     */
    const battery = [
        NoBattery,
        LowBattery,
        TwoBattery,
        ThreeBattery,
        FullBattery,
    ];

    /**
     * Animation of battery charging
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index > 3 ? 0 : index + 1);

            /**
             * No charging animation if no energy
             */
            if (phoneCount === 0) {
                setBatteryPic(LowBattery);
            } else {
                setBatteryPic(battery[index]);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [phoneCount]);

    return (
        <>
            <Box>
                <Center>
                    <Text fontSize="2xl">
                        Akkurat nå produserer solcellene på taket nok energi til
                        at du kan lade
                    </Text>
                    <Text fontSize="4xl" color="#FF8585" margin={3}>
                        {phoneCount}
                    </Text>
                    <Text fontSize="2xl"> mobiler!</Text>
                </Center>
                <Center>
                    <Flex marginTop={10} width="900px" marginLeft={70}>
                        <Box>
                            <Image src={SolarPanelPhone} width="800px"></Image>
                        </Box>
                        <Box id="battery">
                            <Image
                                src={batteryPic}
                                key={battery.indexOf(batteryPic)}
                                width="100px"></Image>
                        </Box>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default SolarPanel;
