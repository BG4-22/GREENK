import { Button } from '@chakra-ui/react';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Link } from 'react-router-dom';

function GameButton(props: {
    children:
        | boolean
        | ReactChild
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
}) {
    return (
        <Link style={{ display: 'flex', height: '50px' }} to={'/spill'}>
            <Button
                borderRadius="40px"
                borderBottom={'3px solid grey'}
                bg="#FFDD85"
                height={'100%'}
                size="lg">
                {props.children}
            </Button>
        </Link>
    );
}

export default GameButton;
