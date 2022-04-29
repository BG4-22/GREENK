import { Text, HStack } from '@chakra-ui/react';
import React from 'react';

interface LegendProps {
    items: string[];
}

const Legend: React.VFC<LegendProps> = ({ items }) => {
    return (
        <HStack justifyContent="space-evenly" w="100%" alignItems="flex-start">
            {items.map((item, index) => (
                <Text w="120px" textAlign="center" key={index}>
                    {item}
                </Text>
            ))}
        </HStack>
    );
};

export default Legend;
