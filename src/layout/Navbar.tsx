import { Box, Circle, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <Box id={'navBar'} aria-label="navigation">
            <Link className="link" to={'/energiflyt'}>
                Energiflyt
            </Link>
            <Link to={'/'}>
                <Circle size={100} className={'homeButton'}>
                    <FiHome size={30} />
                    <Text style={{ fontSize: '15px' }}>Hjem</Text>
                </Circle>
            </Link>
            <Link className="link" to={'/statistikk'}>
                Se Statistikk
            </Link>
        </Box>
    );
};

export default Navbar;
