import { Text } from '@chakra-ui/react';
import React from 'react';
import Diagram from '../../components/Diagram';
import DiagramC from '../../components/DiagramC';

export interface StatisticsPropsI {}

const Statistics: React.FC<StatisticsPropsI> = (props: StatisticsPropsI) => {
    return (
        <>
            <Text>Statistikk</Text>
            <Diagram />
            <DiagramC />
        </>
    );
};

export default Statistics;
