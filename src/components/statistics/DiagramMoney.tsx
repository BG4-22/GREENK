import { useEffect, useState } from 'react';

import { Box, Center, Heading, HStack, Spinner, Text } from '@chakra-ui/react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { getMonthlySpendings } from '../../api/energyData';
import { MonthlySpendings } from '../../types/api';

const DiagramMoney = () => {
    const [data, setData] = useState<MonthlySpendings>([]);
    const [height, setHeight] = useState<number | undefined>(undefined);

    /**
     * Maps every energy-entry to a month.
     */
    useEffect(() => {
        setData(getMonthlySpendings());
    }, []);

    const maxSpent = Math.max(...data.map((month) => month.spent));

    //calcuate the relative height of the money bars
    const barHeight = (value: number) => (value / maxSpent) * 100 + '%';

    /**
     * Decides how high the entry in the table should be based on the value.
     */
    const moneyBoxHeight: () => JSX.Element[] = () =>
        data.map((month, index) => (
            <Box
                className="moneyBar"
                h={barHeight(month.spent)}
                key={'bar' + index}></Box>
        ));

    useEffect(() => {
        //find height of rechart bars
        const findHeight = () => {
            const el: SVGGElement | null = document.querySelector(
                '.recharts-layer.recharts-bar.bars'
            );
            setHeight(el?.getBBox().height);
        };
        const timeout = setTimeout(findHeight, 500);

        return () => clearTimeout(timeout);
    }, [data]);

    return (
        <>
            <Heading transform={'translateY(7rem)'}>
                Hvor mye penger har skolen brukt på energi
            </Heading>

            {!height && (
                <Center mt="200px">
                    <Spinner />
                </Center>
            )}
            <Box visibility={!height ? 'hidden' : 'visible'}>
                <Box className="moneyBarWrapper" marginLeft={40}>
                    <HStack spacing={23} h={height} alignItems={'flex-end'}>
                        {moneyBoxHeight()}
                    </HStack>
                </Box>
                <Box className="axisWrapper" marginLeft={40}>
                    <BarChart width={1200} height={400} data={data}>
                        <XAxis dataKey="month" tick={{ fontSize: 25 }} />
                        <YAxis tick={{ fontSize: 18 }} />
                        <Bar
                            className="bars"
                            dataKey="spent"
                            fill="blue"
                            fontSize={20}
                            opacity={0}
                        />
                    </BarChart>
                </Box>
            </Box>
            <Box transform={'translateY(-8rem)'}>
                <Text>
                    Dette er i gjennomsnitt 10 000 kr mindre enn andre skoler i
                    Trondheim.
                </Text>
            </Box>
        </>
    );
};

export default DiagramMoney;
