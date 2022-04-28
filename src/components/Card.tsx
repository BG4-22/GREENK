import { Box, Stack, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import '../components/funfacts/Funfacts.css';

/**
 * Component used in funfact-card and in scoreboard. Basic white box to ensure similarity in design.
 */

interface CardPropsI {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardPropsI> = ({ title, children }: CardPropsI) => {
    return (
        <Stack id={'funfactStack'} spacing={'1rem'}>
            <Text id={'funfactTitle'}>{title}</Text>
            <Box id={'funfactText'}>{children}</Box>
        </Stack>
    );
};

export default Card;
