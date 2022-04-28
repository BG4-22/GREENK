import {
    Box,
    Flex,
    HStack,
    Image,
    List,
    ListItem,
    Text,
    VStack,
} from '@chakra-ui/react';
import { getEnergySources } from 'api/energyData';
import { FC, useEffect, useState } from 'react';
import { EnergySourceList } from 'types/api';
import Skole from '../../assets/stats/skole.svg';
import './statistics.css';

const colors: string[] = [
    'rgba(205, 233, 181, .6)',
    'rgba(253, 251, 185, .6)',
    'rgba(147, 227, 254, .6)',
    'rgba(244, 164, 192, .6)',
    'rgba(148, 148, 205, .6)',
    'rgba(239, 139,136, .6)',
    'rgba(76, 164, 244, .6)',
    'rgba(168, 152, 151, .6)',
];

interface EnergyElementsPropsI {
    elements: EnergySourceList;
}

const EnergyElements: FC<EnergyElementsPropsI> = ({
    elements,
}): JSX.Element => {
    const total = elements
        .map((value) => value.amount)
        .reduce((a: number, b: number) => a + b);

    return (
        <>
            {elements.map((element, index) => {
                const value: number = Math.ceil((element.amount / total) * 100);
                return (
                    <Box
                        key={'energyElement' + index}
                        className={'animate-width'}
                        pos={'relative'}
                        h={'100%'}
                        w={`${value}%`}>
                        <Box h={'90%'} bg={colors[index]} />
                        <Text
                            textAlign={'center'}
                            fontSize={'1.8rem'}
                            whiteSpace={'nowrap'}>
                            {`${value}%`}
                        </Text>
                    </Box>
                );
            })}
        </>
    );
};

const EnergyInfoList: FC<EnergyElementsPropsI> = ({ elements }) => {
    return (
        <List spacing={'1rem'} w={'90%'}>
            {elements.map((element, index) => {
                return (
                    <ListItem
                        key={`${element.name}-${index}`}
                        display={'inline-flex'}
                        justifyContent={'flex-start'}
                        w={'100%'}
                        alignItems={'center'}>
                        <Box
                            pos={'relative'}
                            h={'2rem'}
                            w={'2rem'}
                            bg={colors[index]}
                            border={'2px solid rgba(0, 0, 0, .8)'}
                            marginRight={'2rem'}></Box>
                        <Text fontSize={'1.5rem'}>{element.name}</Text>
                    </ListItem>
                );
            })}
        </List>
    );
};

const EnergySources: FC = () => {
    /**
     * Index to get data at different hours from the mock data
     */
    const [data, setData] = useState<EnergySourceList[]>([]);
    useEffect(() => {
        setData(getEnergySources());
    }, []);

    const [index, setIndex] = useState<number>(0);

    const increment = () => {
        if (data[index + 1]) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    /**
     * Calculates hours and counts based on the overall consumption
     */
    useEffect(() => {
        const interval = setInterval(() => {
            increment();
        }, 10 * 1000);
        return () => clearInterval(interval);
    }, [index]);

    if (data.length < 1) return <></>;

    return (
        <>
            <Text
                fontSize={'3rem'}
                textAlign={'center'}
                transform={'translateY(2rem)'}>
                Hvor energien kommer fra
            </Text>
            <HStack pos={'relative'} w={'100%'} h={'100%'}>
                <VStack justifyContent={'center'} w={'100%'} h={'100%'}>
                    <Flex
                        pos={'absolute'}
                        w={'75%'}
                        h={'100%'}
                        justifyContent={'center'}>
                        <Image src={Skole} alt={'Nidarvoll skole'} w={'62%'} />
                    </Flex>
                    <HStack spacing={0} h={'75%'} w={'75%'}>
                        <EnergyElements elements={data[index]} />
                    </HStack>
                </VStack>
                <HStack w={'60%'}>
                    <EnergyInfoList elements={data[index]} />
                </HStack>
            </HStack>
            <Text
                fontSize={'1.5rem'}
                textAlign={'center'}
                transform={'translateY(-2rem)'}>
                Til sammenlikning må den gjennomsnittlige skolen kjøpe 60% av
                strømmen sin
            </Text>
        </>
    );
};

export default EnergySources;
