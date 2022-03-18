import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function GameButton() {
    return (
        <Button borderRadius="40px" bg="#FFDD85" size="lg">
            <Link to={'/game'}>Spill nå!</Link>
        </Button>
    );
}

export default GameButton;
