import { Box, Image, List, ListItem, Text } from '@chakra-ui/react';
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
    'rgba(0, 255, 0, .5)',
    'rgba(0, 0, 255, .5)',
    'rgba(0, 255, 255, .5)',
    'rgba(255, 0, 0, .5)',
];

const EnergyElement: FC<EnergySourceI[]> = (props) => {
    console.log(props);
    return <></>;
};

const EnergySources: FC<{}> = () => {
    const energyElements = sources.map((element, index) => {
        return (
            <Box pos={'relative'} h={'100%'} w={`${element.amount}%`}>
                <Box h={'90%'} bg={colors[index]} />
                <Text textAlign={'center'} fontSize={'1.8rem'}>
                    {`${element.amount}%`}
                </Text>
            </Box>
        );
    });

    const energyInfoListElements = sources.map((element, index) => {
        return (
            <ListItem
                display={'inline-flex'}
                justifyContent={'flex-start'}
                w={'100%'}
                alignItems={'center'}>
                <Box
                    pos={'relative'}
                    h={'2rem'}
                    w={'2rem'}
                    bg={colors[index]}
                    marginRight={'2rem'}></Box>
                <Box pos={'relative'}>{element.name}</Box>
            </ListItem>
        );
    });

    return (
        <Box
            pos={'relative'}
            w={'100%'}
            h={'100%'}
            display={'flex'}
            flexDir={'row'}>
            <Box
                display={'flex'}
                justifyContent={'center'}
                w={'100%'}
                h={'100%'}>
                <Box
                    pos={'absolute'}
                    w={'75%'}
                    h={'100%'}
                    justifyContent={'center'}
                    display={'flex'}>
                    <Image src={Skole} alt={'Nidarvoll skole'} w={'50%'} />
                </Box>
                <Box
                    pos={'relative'}
                    m={'auto'}
                    h={'75%'}
                    w={'75%'}
                    display={'flex'}
                    flexDir={'row'}>
                    {energyElements}
                </Box>
            </Box>
            <Box
                pos={'relative'}
                w={'60%'}
                h={'100%'}
                display={'flex'}
                flexDir={'row'}
                justifyContent={'center'}
                alignItems={'center'}>
                <List w={'90%'}>{energyInfoListElements}</List>
            </Box>
        </Box>
    );
};

export default EnergySources;
