import { useEffect, useState } from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import dataJson from '../assets/MockData.json';

const DiagramMoney = () => {
    const [count, setCount] = useState<string>('');

    /**
     * Maps every energy-entry to a month.
     */
    const moneyToList = () =>
        dataJson.EnergyMoneyMonthly.map((month) => month.spent);

    /**
     * Decides how high the entry in the table should be based on the value.
     */
    const moneyBoxHeight: () => JSX.Element[] = () =>
        moneyToList().map((item) => (
            <Box className="moneyBar" height={item / 166.66}></Box>
        ));

    return (
        <>
            <Text transform={'translateY(7rem)'} fontSize="4xl">
                Penger skolen har brukt på strøm
            </Text>
            <Box>
                <Box className="moneyBarWrapper" marginLeft={40}>
                    <HStack spacing={23} alignItems={'flex-end'}>
                        {moneyBoxHeight()}
                    </HStack>
                </Box>
                <Box className="axisWrapper" marginLeft={40}>
                    <BarChart
                        width={1200}
                        height={400}
                        data={dataJson.EnergyMoneyMonthly}>
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
                <Text>
                    Lær mer om hvorfor skolen bruker mindre strøm om sommeren:
                    ...
                </Text>
            </Box>
        </>
    );
};

export default DiagramMoney;
