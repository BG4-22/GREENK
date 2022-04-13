import * as React from 'react';
import { useEffect, useState } from 'react';
import '../pages/stats/stats.css';
import money from '../assets/stats/money.png';
import { Text, Flex, Center, Box, VStack, HStack } from '@chakra-ui/react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import dataJson from '../assets/MockData.json';

const DiagramMoney = () => {
    const [count, setCount] = useState<string>('');

    useEffect(() => {}, []);

    function moneyToList() {
        const moneyList: number[] = [];
        dataJson.EnergyMoneyMonthly.forEach((month) =>
            moneyList.push(month.spent)
        );
        return moneyList;
    }

    function moneyBoxHeight() {
        const boxList: JSX.Element[] = [];

        moneyToList().forEach(
            (item) =>
                boxList.push(
                    <Box className="moneyBar" height={item / 166.66}></Box>
                ) //Prøve på noe modelo så lappene blir hele
        );

        return boxList;
    }

    return (
        <>
            <Text transform={'translateY(4rem)'} fontSize="4xl">
                Hvor mye penger har skolen brukt på strøm de siste månedene?
            </Text>
            <Box>
                <Box className="moneyBarWrapper">
                    <HStack spacing={41} alignItems={'flex-end'}>
                        {moneyBoxHeight()}
                    </HStack>
                </Box>
                <Box className="axisWrapper">
                    <BarChart
                        width={1400}
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
            <Box transform={'translateY(-4rem)'}>
                <Text>
                    Dette er i gjennomsnitt .... mindre enn andre skoler i
                    Trondheim
                </Text>
                <Text>
                    Lær mer om hvorfor skolen bruker mindre strøm om sommeren:
                </Text>
            </Box>
        </>
    );
};

export default DiagramMoney;
