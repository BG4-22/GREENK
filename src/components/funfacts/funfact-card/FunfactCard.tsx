import { Box, Stack, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import './../Funfacts.css';

/**
 * Component used in funfact-card and in scoreboard. Basic white box to ensure similarity in design.
 */

interface FunfactCardPropsI {
    title: string;
    children: ReactNode;
}

const FunfactCard: React.FC<FunfactCardPropsI> = ({
    title,
    children,
}: FunfactCardPropsI) => {
    return (
        <Stack id={'funfactStack'} spacing={'1rem'}>
            <Text id={'funfactTitle'}>{title}</Text>
            <Box id={'funfactText'}>{children}</Box>
        </Stack>
    );
};

export default FunfactCard;
