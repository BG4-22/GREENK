import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface YAxisLabelProps {
    text: string;
}

const YAxisLabel: React.VFC<YAxisLabelProps> = ({ text }) => {
    return (
        <Box w="30px">
            <Text
                w="300px"
                style={{
                    transform:
                        'rotateZ(90deg) translateY(550%) translateX(-10px)',
                }}>
                {text}
            </Text>
        </Box>
    );
};

export default YAxisLabel;
