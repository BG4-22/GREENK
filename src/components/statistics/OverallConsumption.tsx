import {
    Box,
    Center,
    Flex,
    Image,
    Spacer,
    Spinner,
    Text,
} from '@chakra-ui/react';
import { getEnergyConsumptionPerHour } from '../../api/energyData';
import { useEffect, useState } from 'react';
import { EnergyConsumptionList } from '../../types/api';
import HotChocolate from '../../assets/stats/hotChocolate.png';
import Light from '../../assets/stats/light.png';
import Playstation from '../../assets/stats/playstation.png';
import './statistics.css';

//Variable for light consumption
const lightConsumption = 0.06;

//Variable for playstation consumption
//playstation: 0.31 kwh pr hour
const playstationConsumption: number = 0.31;

//Variable for hot water consumption
//https://www.quora.com/How-much-kW-of-energy-is-needed-to-boil-1kg-of-water-Assume-at-1atm-and-at-room-temperature-Then-how-much-would-it-be-for-2-3-and-4kg-of-water-Is-there-a-linear-relationship
//1.33952 kW for 1kg water
//1.33952/5 = 0.267904 per 2dl
const hotChocoConsumption = 0.27;

const OverallConsumption: React.FC = () => {
    const [data, setData] = useState<EnergyConsumptionList>([]);
    useEffect(() => {
        setData(getEnergyConsumptionPerHour());
    }, []);

    const [hour, setHour] = useState<number>(0);

    //Updates data when hour change
    function incrementHour() {
        const nextHour = hour >= 23 ? 0 : hour;
        setHour(nextHour);
        setConsPerHour(data[nextHour]);
    }

    //Updates data for overall consumption every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            incrementHour();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const [consPerHour, setConsPerHour] = useState<number>(134.5);
    const [LightHour, setLightHour] = useState<number>(0);
    const [playstationHour, setPlaystationHour] = useState<number>(0);
    const [hotChocoCount, setHotChocoCount] = useState<number>(0);

    //Calculates hours and counts based on the overall consumption
    useEffect(() => {
        const calc = (value: number) => Math.floor(consPerHour / value);

        setLightHour(calc(lightConsumption));
        setPlaystationHour(calc(playstationConsumption));
        setHotChocoCount(calc(hotChocoConsumption));
    }, [consPerHour]);

    if (!data) return <Spinner />;

    return (
        <>
            <Box marginBottom={50}>
                <Center>
                    <Text fontSize="2xl">Forrige time brukte skolen vår</Text>
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
                    <Flex width={700} marginRight={50} position="absolute">
                        <Box>
                            <Text className="funfact">
                                Å ha på en lyspære i
                                <HightlightedText>{LightHour}</HightlightedText>
                                timer!
                            </Text>
                        </Box>
                        <Spacer></Spacer>
                        <Box>
                            <Text className="funfact">
                                Å spille playstation i
                                <HightlightedText>
                                    {playstationHour}
                                </HightlightedText>
                                timer!
                            </Text>
                        </Box>
                        <Spacer />
                        <Box>
                            <Text className="funfact">
                                Å varme opp vann til
                                <HightlightedText>
                                    {hotChocoCount}
                                </HightlightedText>
                                kakaoer!
                            </Text>
                        </Box>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

const HightlightedText: React.FC = ({ children }) => {
    return (
        <Text as="span" fontSize="2xl" color="#FF8585">
            {' '}
            {children}{' '}
        </Text>
    );
};

export default OverallConsumption;
