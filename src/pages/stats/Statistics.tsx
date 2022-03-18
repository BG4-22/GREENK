import { Text } from '@chakra-ui/react';
import React from 'react';

export interface StatisticsPropsI {}

const Statistics: React.FC<StatisticsPropsI> = (props: StatisticsPropsI) => {
    return (
        <>
            <Text>Statistikk</Text>
        </>
    );
};

export default Statistics;
