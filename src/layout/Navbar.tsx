import { Box, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';
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
            border=".1px solid black"
            h={'75px'}
            w={'100%'}
            maxW={'50%'}
            color="white"
            marginTop={'10px'}
            fontSize={'2rem'}>
            <Link className="linkTypeOne" to={'/energiflyt'}>
                Energiflyt
            </Link>
            <Link className="linkTypeTwo" to={'/'}>
                <FiHome size={30} />
                <Text style={{ fontSize: '15px' }}>Hjem</Text>
            </Link>
            <Link className="linkTypeOne" to={'/statistikk'}>
                Se Statistikk
            </Link>
        </Box>
    );
};

export default Navbar;
