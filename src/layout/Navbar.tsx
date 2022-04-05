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
            color="white">
            <Link to={'/energiflyt'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'75px'}
                    width={'310px'}
                    borderRadius={'3rem'}>
                    Energiflyt
                </Box>
            </Link>
            <Link to={'/'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                    height={'100px'}
                    marginBottom={'25px'}
                    width={'100px'}
                    borderRadius={'3rem'}
                    border={'.1px solid black'}
                    bg="#8BA5FF">
                    <FiHome size={30} />
                    <Text style={{ fontSize: '10px' }}>Home</Text>
                </Box>
            </Link>
            <Link to={'/statistikk'}>
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'75px'}
                    width={'310px'}
                    borderRadius={'3rem'}>
                    Statistikk
                </Box>
            </Link>
        </Box>
    );
};

export default Navbar;
