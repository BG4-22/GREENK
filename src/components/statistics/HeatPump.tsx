import { Box, Image, Text, Flex, Center, Spacer } from '@chakra-ui/react';
import React from 'react';

import HeatPump from '../../assets/stats/heatpump2.png';
import Shower from '../../assets/stats/shower.png';

const Heatpump = () => {
    const heatPumpEnergy = 5000;
    const showerEnergy = 10;
    const calcHours = heatPumpEnergy / showerEnergy;
    return (
        <>
            <Box>
                <Center>
                    <Flex
                        marginTop={10}
                        width="900px"
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Text fontSize="4xl" margin={'-40px auto 50px auto'}>
                            Denne skolen bruker fornybare energikilder!
                        </Text>
                        <Box>
                            <Image src={HeatPump} width="400px"></Image>
                        </Box>
                        <Spacer />
                        <Text
                            fontSize="3xl"
                            width={'600px'}
                            textAlign={'center'}
                            margin={'30px auto -20px auto'}>
                            har den siste timen spart jordkloden for like mye
                            energi som om du skulle dusjet i
                        </Text>
                        <Flex
                            marginTop={10}
                            width="900px"
                            flexDir={'row'}
                            justifyContent={'center'}
                            alignItems={'center'}>
                            <Text fontSize="8xl" color="#F4A4C0" margin={3}>
                                {calcHours}
                            </Text>
                            <Text fontSize="3xl"> timer</Text>
                            <Box>
                                <Image src={Shower} width="150px"></Image>
                            </Box>
                        </Flex>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default Heatpump;
