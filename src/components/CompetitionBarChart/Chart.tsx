import { HStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Bar from './Bar';

const colors: string[] = ['#9DBE98', '#FFDD85', '#FF8585', '#8BA5FF'];

interface ChartProps {
    items: number[];
    unitOfMeasure: string;
}

const Chart: React.FC<ChartProps> = ({ items, unitOfMeasure }) => {
    const largestValue = useMemo(() => Math.max(...items), [items]);
    const relativeHeights = useMemo(
        () => items.map((item) => (item / largestValue) * 100 + '%'),
        [items, largestValue]
    );

    return (
        <HStack
            justifyContent="space-evenly"
            alignItems="flex-end"
            borderColor="black"
            borderStyle="solid"
            borderWidth="0px 0px 1px 1px"
            h="250px"
            w="100%">
            {items.map((item, index) => (
                <Bar
                    key={index}
                    height={relativeHeights[index]}
                    color={colors[index % colors.length]}
                    text={item + unitOfMeasure}
                    isLeading={item === largestValue}
                />
            ))}
        </HStack>
    );
};

export default Chart;
