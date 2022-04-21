import { VStack, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';

import Crown from '../../assets/images/crown.png';

interface BarProps {
    height: string;
    color: string;
    text: string;
    isLeading?: boolean;
}

const Bar: React.VFC<BarProps> = ({
    height,
    color,
    text,
    isLeading = false,
}) => {
    return (
        <VStack
            h={`calc(${height} + 50px)`}
            justifyContent="flex-end"
            alignItems="center"
            spacing="0">
            {isLeading && <Image src={Crown} h="50px" w="65px" />}
            <Flex
                h={`calc(100% - 50px)`}
                w="50px"
                bgColor={color}
                borderRadius="25px 25px 0px 0px"
                justifyContent="center"
                alignItems="center">
                <Text textAlign="center" color="white">
                    {text}
                </Text>
            </Flex>
        </VStack>
    );
};

export default Bar;
