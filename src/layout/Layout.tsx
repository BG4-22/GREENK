import { Box, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <Box
                aria-label="navigation"
                display="flex"
                justify-content="center"
                alignItems="center"
                position="absolute"
                bg="#8BA5FF"
                maxH={20}
                borderRadius={70}
                border=".1px solid black"
                w="50%"
                p={20}
                color="white"
                margin={50}
                bottom="0px"
                left="20%">
                <Grid h="100%" w="100%" templateColumns="repeat(3, 1fr)">
                    <GridItem w="100%" alignSelf="center">
                        <Text>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                }}>
                                Nidarvoll Prosjektet
                            </Link>
                        </Text>
                    </GridItem>
                    <GridItem w="100%">
                        <Center h="40px">
                            <Link
                                to="/"
                                style={{
                                    textDecoration: 'none',
                                }}>
                                <Circle
                                    display="flex"
                                    flexDirection="column"
                                    size={70}
                                    bg="#8BA5FF"
                                    border=".1px solid black"
                                    position="relative">
                                    <FiHome size={30} />
                                    <Text style={{ fontSize: '10px' }}>
                                        Home
                                    </Text>
                                </Circle>
                            </Link>
                        </Center>
                    </GridItem>
                    <GridItem w="100%" alignSelf="center">
                        <Text>
                            <Link
                                to="/statistikk"
                                style={{
                                    textDecoration: 'none',
                                }}>
                                Statistikk
                            </Link>
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
		the child routes we defined above. */}
            <Outlet />
        </>
    );
}
