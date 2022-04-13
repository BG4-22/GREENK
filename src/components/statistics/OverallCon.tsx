import { Box, Center, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import dataJson from '../../assets/MockData.json';
import HotChocolate from '../../assets/stats/hotChocolate.png';
import Light from '../../assets/stats/light.png';
import Playstation from '../../assets/stats/playstation.png';
import './statistics.css';

const OverallCon = () => {
    //Variable for light consumption
    const lightConsump = 0.06;

    //Variable for playstation consumption
    //playstation: 0.31 kwh pr hour
    const playstationConsump: number = 0.31;

    //Variable for hot water consumption
    //https://www.quora.com/How-much-kW-of-energy-is-needed-to-boil-1kg-of-water-Assume-at-1atm-and-at-room-temperature-Then-how-much-would-it-be-for-2-3-and-4kg-of-water-Is-there-a-linear-relationship
    //1.33952 kW for 1kg water
    //1.33952/5 = 0.267904 per 2dl
    const hotChocoConsump = 0.27;

    const [consPerHour, setConsPerHour] = useState<number>(48.6);
    const [LightHour, setLightHour] = useState<number>(0);
    const [playstationHour, setPlaystationHour] = useState<number>(0);
    const [hotChocoCount, setHotChocoCount] = useState<number>(0);

    //Gets data for overall consumption every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            getData();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    //Calculates hours and counts based on the overall consumption
    useEffect(() => {
        const calcLight = Math.floor(consPerHour / lightConsump);
        setLightHour(calcLight);
        const calcPlaystation = Math.floor(consPerHour / playstationConsump);
        console.log(calcPlaystation);
        setPlaystationHour(calcPlaystation);
        const calcHotChoco = Math.floor(consPerHour / hotChocoConsump);
        setHotChocoCount(calcHotChoco);
    }, [consPerHour]);

    //Index to get data at different hours from the mock data
    let index = 0;

    //Fetches data from the different hours
    function getData() {
        index++;
        if (index > 23) {
            index = 0;
        }
        setConsPerHour(dataJson.EnergyComsumptionByHour[index]);
    }

    return (
        <>
            <Box>
                <Center>
                    <Text fontSize="2xl">
                        {' '}
                        Forrige time brukte Nidarvoll skole{' '}
                    </Text>
                    <Text fontSize="4xl" color="#FF8585" margin={3}>
                        {consPerHour}
                    </Text>
                    <Text fontSize="2xl"> kW! </Text>
                </Center>
                <Spacer />
                <Center>
                    <Text fontSize="2xl"> Det er det samme som: </Text>
                </Center>
                <Center>
                    <Flex width={800}>
                        <Box>
                            <Image src={Light} width={200}></Image>
                        </Box>
                        <Spacer />
                        <Box>
                            <Image src={Playstation} width={250}></Image>
                        </Box>
                        <Spacer />
                        <Box>
                            <Image src={HotChocolate} width={250}></Image>
                        </Box>
                    </Flex>
                </Center>
                <Center>
                    <Flex width={700}>
                        <Box>
                            <Text className="funfact">
                                Å ha på en lyspære i {LightHour} timer!
                            </Text>
                        </Box>
                        <Spacer></Spacer>
                        <Box>
                            <Text className="funfact">
                                Å spille playstation i {playstationHour} timer!
                            </Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Text className="funfact">
                                Å varme opp vann til å lage
                                {hotChocoCount}
                                kopper med kakao!
                            </Text>
                        </Box>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default OverallCon;
