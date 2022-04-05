import { Box, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
            <Link
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    background: '#8BA5FF',
                    borderRadius: '3rem',
                }}
                to={'/energiflyt'}>
                Energiflyt
            </Link>
            <Link
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '135%',
                    marginBottom: '25px',
                    width: '30%',
                    borderRadius: '3rem',
                    border: '.1px solid black',
                    background: '#8BA5FF',
                }}
                to={'/'}>
                <FiHome size={30} />
                <Text style={{ fontSize: '15px' }}>Hjem</Text>
            </Link>
            <Link
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    background: '#8BA5FF',
                    borderRadius: '3rem',
                }}
                to={'/statistikk'}>
                Se Statistikk
            </Link>
        </Box>
    );
};

export default Navbar;
