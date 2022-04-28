import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

/**
 * Button with preset design. Is used in HighScore and ScoreBoard component.
 */

const GameButton: React.FC = ({ children }) => {
    return (
        <Link style={{ display: 'flex', height: '50px' }} to={'/spill'}>
            <Button
                borderRadius="40px"
                borderBottom={'3px solid grey'}
                bg="#FFDD85"
                height={'100%'}
                size="lg">
                {children}
            </Button>
        </Link>
    );
};

export default GameButton;
