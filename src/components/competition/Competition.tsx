import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import '../../App.css';
import Chart from './Chart';
import Legend from './Legend';
import YAxisLabel from './YAxisLabel';

interface CompetitionProps {
    data: { name: string; value: number }[];
    unitOfMeasure: string;
}

const Competition: React.VFC<CompetitionProps> = ({ data, unitOfMeasure }) => {
    return (
        <VStack h={'100%'}>
            <Text marginBottom={'1.5em'} fontSize={'1.5vw'} color={'#455b33'}>
                Skolekonkurransen
            </Text>
            <HStack h="80%" w="100%" justifyContent="flex-end">
                <YAxisLabel text="Andel energi fra miljøvennlige kilder" />
                <VStack h="100%" w="100%" justifyContent="flex-end">
                    <Chart
                        items={data.map((a) => a.value)}
                        unitOfMeasure={unitOfMeasure}
                    />
                    <Legend items={data.map((a) => a.name)} />
                </VStack>
            </HStack>
        </VStack>
    );
};

export default Competition;
