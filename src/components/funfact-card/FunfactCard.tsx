import { Box, Stack, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface FunfactCardPropsI {
    title: string;
    children: ReactNode;
}

const FunfactCard: React.FC<FunfactCardPropsI> = ({
    title,
    children,
}: FunfactCardPropsI) => {
    return (
        <Stack
            borderRadius={'4rem'}
            bg={'#FFFCFB'}
            w={'full'}
            h={'fit-content'}
            paddingBottom={'2rem'}
            spacing={'1rem'}>
            <Text
                width={'90%'}
                margin={'0 auto'}
                fontWeight={'bold'}
                fontSize={'2rem'}
                paddingTop={'1rem'}
                borderBottom={'2px solid #9dbe98'}>
                {title}
            </Text>
            <Box
                as={'span'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}>
                {children}
            </Box>
        </Stack>
    );
};

export default FunfactCard;
