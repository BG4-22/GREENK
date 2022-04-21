import { Box, Image, Text, Flex, Center, Spacer } from '@chakra-ui/react';
import React from 'react';

import HeatPump from '../../assets/stats/heatPumpPink.png';
import Shower from '../../assets/stats/shower.png';
import Arrow from '../../assets/stats/arrow.png';

const Heatpump = () => {
    const heatPumpEnergy = 5000;
    //Dusj: 5 kwh for 30 min
    const showerEnergy = 10;
    const calcHours = heatPumpEnergy / showerEnergy;
    return (
        <>
            <Box>
                <Center>
                    <Text fontSize="2xl">
                        Forrige time produserte varmepumpene nok energi til at
                        du kan dusje i
                    </Text>
                    <Text fontSize="4xl" color="#FF8585" margin={3}>
                        {calcHours}
                    </Text>
                    <Text fontSize="2xl"> timer!</Text>
                </Center>
                <Flex marginTop={10} width="900px">
                    <Box>
                        <Image src={HeatPump} width="400px"></Image>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src={Arrow} width="200px" marginTop={50}></Image>
                    </Box>
                    <Spacer />
                    <Box>
                        <Image src={Shower} width="250px"></Image>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Heatpump;
