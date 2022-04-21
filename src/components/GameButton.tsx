import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function GameButton() {
    return (
        <Link style={{ display: 'flex', height: '50px' }} to={'/spill'}>
            <Button
                borderRadius="40px"
                borderBottom={'3px solid grey'}
                bg="#FFDD85"
                height={'100%'}
                size="lg">
                Spill nå!
            </Button>
        </Link>
    );
}

export default GameButton;
