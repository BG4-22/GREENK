import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

function Game() {
    return (
        <>
            <Heading color="white" margin="20px">
                Hva bruker mest strøm?
            </Heading>
            <Box bg="white" w="80%" h="70%" p={4} borderRadius="50px"></Box>
        </>
    );
}

export default Game;
