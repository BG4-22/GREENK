import { Text } from '@chakra-ui/react';
import React from 'react';
import Scoreboard from '../../components/Scoreboard';

export interface HomePropsI {}
import { Grid, GridItem } from '@chakra-ui/react';

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <>
            <Grid
                h="85vh"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={25}>
                <GridItem rowSpan={1} colSpan={1} bg="rgba(255,255,255,0.2)">
                    <Text>SOLCELLE</Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2} bg="rgba(255,255,255,0.8)">
                    <Text>VIDEO</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="rgba(255,255,255,0.2)">
                    <Text>SPILL</Text>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="rgba(255,255,255,0.2)">
                    <Scoreboard />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} bg="rgba(255,255,255,0.2)">
                    <Text>FUNFACTS</Text>
                </GridItem>
            </Grid>
        </>
    );
};

export default Home;
