import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function GameButton() {
    return (
        <Stack spacing={4} direction="row" align="center">
            <Button borderRadius="40px" bg="#FFDD85" size="lg">
                <Link to={'/game'}>Spill nå!</Link>
            </Button>
        </Stack>
    );
}

export default GameButton;
