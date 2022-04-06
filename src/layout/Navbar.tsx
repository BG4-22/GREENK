import { Box, Circle, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <Box
            aria-label="navigation"
            display="flex"
            justify-content="space-around"
            alignItems="center"
            position="relative"
            bg="#8BA5FF"
            borderRadius={70}
            borderBottom={'3px solid grey'}
            h={'75px'}
            w={'100%'}
            maxW={'50%'}
            color="white"
            marginTop={'10px'}
            fontSize={'1.5rem'}>
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
