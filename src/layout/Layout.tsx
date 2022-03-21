import { Link, Outlet } from 'react-router-dom';
import { Box, Center, Circle, Grid, GridItem, Text } from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';

export function Layout() {
    return (
        <>
            <div>
                {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
                <Box
                    display="flex"
                    justify-content="center"
                    alignItems="center"
                    bg="#8BA5FF"
                    maxH={20}
                    borderRadius={70}
                    border=".1px solid black"
                    w="50%"
                    p={20}
                    color="white"
                    margin={50}>
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
                                        <text style={{ fontSize: '10px' }}>
                                            Home
                                        </text>
                                    </Circle>
                                </Link>
                            </Center>
                        </GridItem>
                        <GridItem w="100%" alignSelf="center">
                            <text>
                                <Link
                                    to="/statistikk"
                                    style={{
                                        textDecoration: 'none',
                                    }}>
                                    Statistikk
                                </Link>
                            </text>
                        </GridItem>
                    </Grid>
                </Box>
            </div>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </>
    );
}
