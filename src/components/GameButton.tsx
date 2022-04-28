import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const GameButton: React.FC = ({ children }) => {
    return (
        <Link style={{ display: 'flex', height: '50px' }} to={'/spill'}>
            <Button size="lg" variant="game">
                {children}
            </Button>
        </Link>
    );
};

export default GameButton;
