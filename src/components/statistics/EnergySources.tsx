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
import { FC } from 'react';
import Skole from '../../assets/stats/skole.svg';

type IsPositive<N extends number> = `${N}` extends `-${string}` ? false : true;

type IsInteger<N extends number> = `${N}` extends `${string}.${string}`
    ? never
    : `${N}` extends `-${string}.${string}`
    ? never
    : number;

type IsValid<N extends number> = IsPositive<N> extends true
    ? IsInteger<N> extends number
        ? number
        : never
    : never;

type PositiveNumber<
    N extends number,
    T extends number[] = []
> = T['length'] extends N ? T[number] : PositiveNumber<N, [...T, T['length']]>;

type Range<N1 extends IsValid<N1>, N2 extends IsValid<N2>> = Exclude<
    PositiveNumber<N2>,
    PositiveNumber<N1>
>;

interface EnergySourceI {
    name: string;
    amount: Range<0, 100>;
}

const sources: EnergySourceI[] = [
    {
        name: 'Resirkulasjon av varmeenergi',
        amount: 15,
    },
    {
        name: 'Solceller',
        amount: 25,
    },
    {
        name: 'Varmepumpe',
        amount: 50,
    },
    {
        name: 'Annet',
        amount: 10,
    },
];

const colors: string[] = [
    'rgba(205, 233, 181, .6)',
    'rgba(253, 251, 185, .6)',
    'rgba(147, 227, 254, .6)',
    'rgba(244, 164, 192, .6)',
];

interface EnergyElementsPropsI {
    elements: EnergySourceI[];
}

const EnergyElements: FC<EnergyElementsPropsI> = ({
    elements,
}): JSX.Element => {
    return (
        <>
            {elements.map((element, index) => {
                return (
                    <Box pos={'relative'} h={'100%'} w={`${element.amount}%`}>
                        <Box h={'90%'} bg={colors[index]} />
                        <Text textAlign={'center'} fontSize={'1.8rem'}>
                            {`${element.amount}%`}
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
    return (
        <>
            <Text
                fontSize={'3rem'}
                textAlign={'center'}
                transform={'translateY(2rem)'}>
                Hvor kommer energien fra?
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
                        <EnergyElements elements={sources} />
                    </HStack>
                </VStack>
                <HStack w={'60%'}>
                    <EnergyInfoList elements={sources} />
                </HStack>
            </HStack>
            <Text
                fontSize={'1.5rem'}
                textAlign={'center'}
                transform={'translateY(-2rem)'}>
                Til sammenlikning får den gjennomsnittlige skolen kjøpe 60% av
                strømmen sin
            </Text>
        </>
    );
};

export default EnergySources;
