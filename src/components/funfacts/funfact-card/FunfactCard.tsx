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
            borderRadius={'2rem'}
            bg={'#FFFCFB'}
            w={'80%'}
            h={'280px'}
            paddingBottom={'.9rem'}
            overflow={'hidden'}
            spacing={'1rem'}>
            <Text
                width={'90%'}
                margin={'0 auto'}
                fontWeight={'bold'}
                fontSize={'1.5vw'}
                padding={'0.5rem'}
                textAlign={'center'}
                borderBottom={'2px solid #9dbe98'}>
                {title}
            </Text>
            <Box
                maxH={'100%'}
                as={'span'}
                display={'flex'}
                fontSize={'10vw'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}>
                {children}
            </Box>
        </Stack>
    );
};

export default FunfactCard;
