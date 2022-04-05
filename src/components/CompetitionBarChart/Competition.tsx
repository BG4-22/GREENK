import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Chart from './Chart';
import Legend from './Legend';
import YAxisLabel from './YAxixLabel';

interface CompetitionProps {
    data: { name: string; value: number }[];
    unitOfMeasure: string;
}

const Competition: React.VFC<CompetitionProps> = ({ data, unitOfMeasure }) => {
    return (
        <>
            <HStack h="100%" w="100%" justifyContent="flex-start">
                <YAxisLabel text="Andel energi fra miljøvennlige kilder" />
                <VStack h="100%" w="100%" justifyContent="flex-end">
                    <Chart
                        items={data.map((a) => a.value)}
                        unitOfMeasure={unitOfMeasure}
                    />
                    <Legend items={data.map((a) => a.name)} />
                </VStack>
            </HStack>
        </>
    );
};

export default Competition;
