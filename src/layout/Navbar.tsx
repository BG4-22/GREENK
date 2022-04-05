import { Box, Button, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <Box
            aria-label={'navigation'}
            display={'flex'}
            justify-content={'center'}
            alignItems={'center'}
            position={'relative'}
            bg={'#6387ff'}
            borderRadius={70}
            border={'.1px solid black'}
            w={'100%'}
            h={'3rem'}
            maxW={'50%'}
            margin={'6em auto auto auto'}
            bottom={'1rem'}
            color="white">
            <Grid h="100%" w="100%" templateColumns="1fr auto 1fr">
                <GridItem h="100%" w="100%" alignSelf="center">
                    <Button
                        h="100%"
                        bg={'#6387ff'}
                        display={'flex'}
                        flexDirection={'column'}
                        borderRadius={70}
                        w={'100%'}
                        _hover={{
                            bg: '#8BA5FF',
                            border: '.1px solid #000',
                            color: '#000',
                        }}>
                        <Link
                            to="/energiflyt"
                            style={{
                                textDecoration: 'none',
                            }}>
                            Energiflyt
                        </Link>
                    </Button>
                </GridItem>
                <GridItem h="100%" w="100%">
                    <Center w={'100px'}>
                        <Link
                            to="/"
                            style={{
                                textDecoration: 'none',
                            }}>
                            <Button
                                id={'navbar-home-button'}
                                position={'absolute'}
                                left={'50%'}
                                transform={'translateX(-50%)'}
                                bottom={'0px'}
                                h={'110px'}
                                w={'110px'}
                                zIndex={1}
                                bg={'#6387ff'}
                                minH={'100%'}
                                border={'.1px solid black'}
                                borderRadius={'1000px'}
                                colorScheme="blue"
                                aria-label="Home button"
                                _hover={{ bg: '#8BA5FF' }}>
                                <Box
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    display={'flex'}
                                    flexDirection={'column'}>
                                    <FiHome size={30} title={'Hjem'} />
                                    <Text>Hjem</Text>
                                </Box>
                            </Button>
                        </Link>
                    </Center>
                </GridItem>
                <GridItem h="100%" w="100%" alignSelf="center">
                    <Link
                        to="/statistikk"
                        style={{
                            textDecoration: 'none',
                        }}>
                        <Button
                            h="100%"
                            bg={'#6387ff'}
                            borderRadius={70}
                            w={'100%'}
                            _hover={{
                                bg: '#8BA5FF',
                                border: '.1px solid #000',
                                color: '#000',
                            }}>
                            Statistikk
                        </Button>
                    </Link>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Navbar;
