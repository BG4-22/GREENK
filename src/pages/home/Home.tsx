import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import NidarvollVideo from '../../Assets/Nidarvoll-video.mp4';
import Scoreboard from '../../components/Scoreboard';
import SolarPanelComponent from '../../components/solar-panel-component';

export interface HomePropsI {}

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
                    <SolarPanelComponent />
                </GridItem>
                <GridItem rowSpan={2} colSpan={2} bg="#C3E0B5">
                    <Text fontSize="32px" color="#455B33" marginBottom="0px">
                        NIDARVOLL GRØNN KIOSK
                    </Text>
                    <video width="540px" height="540px" autoPlay loop>
                        <source src={NidarvollVideo} type="video/mp4"></source>
                    </video>
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
