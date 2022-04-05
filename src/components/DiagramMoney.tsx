import * as React from 'react';
import { useEffect, useState } from 'react';
import money from '../assets/stats/money.png';
import { Input, Text } from '@chakra-ui/react';

const DiagramMoney = () => {
    const [count, setCount] = useState<string>('');

    useEffect(() => {}, []);

    return (
        <>
            <Text>
                Hvor mye penger har skolen brukt på strøm de siste månedene?
            </Text>
        </>
    );
};

export default DiagramMoney;
