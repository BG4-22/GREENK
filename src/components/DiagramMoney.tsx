import { useEffect, useState } from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { getMonthlySpendings } from 'api/energyData';
import { MonthlySpendings } from 'types/api';

const DiagramMoney = () => {
    const [data, setData] = useState<MonthlySpendings>([]);

    useEffect(() => {
        setData(getMonthlySpendings());
    }, []);

    const moneyBoxHeight: () => JSX.Element[] = () =>
        data.map((month) => (
            <Box className="moneyBar" height={month.spent / 166.66}></Box>
        ));

    return (
        <>
            <Text transform={'translateY(7rem)'} fontSize="4xl">
                Hvor mye penger har skolen brukt på energi
            </Text>
            <Box>
                <Box className="moneyBarWrapper" marginLeft={40}>
                    <HStack spacing={23} alignItems={'flex-end'}>
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
