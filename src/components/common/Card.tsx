import { Box, Stack, Text } from '@chakra-ui/react';
import React, { ReactNode, CSSProperties } from 'react';

/**
 * Component used in funfact-card and in scoreboard. Basic white box to ensure similarity in design.
 */
interface CardPropsI {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardPropsI> = ({ title, children }: CardPropsI) => {
    return (
        <Stack sx={stackStyle} spacing={'1rem'}>
            <Text sx={titleStyle}>{title}</Text>
            <Box sx={textStyle}>{children}</Box>
        </Stack>
    );
};

export default Card;

const stackStyle = {
    borderRadius: '2rem',
    background: '#fff',
    width: '80%',
    height: '280px',
    paddingBottom: '0.9rem',
    overflow: 'hidden',
} as CSSProperties;

const titleStyle = {
    width: '90%',
    margin: '0 auto',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    padding: '0.5rem',
    textAlign: 'center',
    borderBottom: '2px solid #9dbe98',
} as CSSProperties;

const textStyle = {
    maxHeight: '100%',
    display: 'flex',
    fontSize: '10vw',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
};
