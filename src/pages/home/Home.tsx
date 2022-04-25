import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import NidarvollVideo from 'assets/videos/Nidarvoll-video.mp4';
import Competition from 'components/competition';
import FunfactSlideshow from 'components/funfacts/funfact-slideshow';
import Scoreboard from 'components/game/Scoreboard';
import SolarPanelMascot from 'components/solarpanel/SolarPanelMascot';
import React from 'react';
import './Home.css';

export interface HomePropsI {}

const funfacts: string[] = [
    'Hvis man samler all solenergi som treffer jorda på 60 minutter, er det nok energi for hele verden i ett år.',
    'En vindmølle lager nok energi til 1400 hus.  ',
    'Elektrisitet i stømledningene går like fort som lyset.',
    'Fugler kan sitte på en strømledning uten å få støt, men hvis de er borti to samtidig lager de en sluttet krets og kan dø.',
    'Fornybar energi kommer fra kilder som vind, sol, vann og jordvarme. Nidarvoll skole bruker 80% fornybar energi ',
    'Mesteparten av energien vi bruker i verden i dag kommer fra ikke fornybar energi som kull, olje og gass. ',
    'Ikke fornybar energi forurenser masse og verdens kull, olje og gass brukes opp!',
];

const exampleData = [
    { name: 'Nidarvoll skole', value: 70 },
    { name: 'Gjennomsnitts- skolen i Trondheim', value: 30 },
];

const HomeWelcomeComponent: React.FC = () => {
    return (
        <Box id={'welcomeBox'}>
            <Text id={'greenK'}>GRØNN KIOSK: Nidarvoll Skole</Text>
            <Box marginTop={'20px'}>
                <video width="100%" loop autoPlay>
                    <source src={NidarvollVideo} type="video/mp4"></source>
                </video>
            </Box>
        </Box>
    );
};

// TODO: fix sizes of content containers for small screen

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <Grid id="grid">
            <GridItem id={'item1'} rowSpan={1} colSpan={1}>
                <SolarPanelMascot />
            </GridItem>
            <GridItem id={'item2'} rowSpan={2} colSpan={2}>
                <HomeWelcomeComponent />
            </GridItem>
            <GridItem id={'item3'} rowSpan={1} colSpan={1}>
                <Scoreboard />
            </GridItem>
            <GridItem id={'item4'} rowSpan={1} colSpan={1}>
                <Competition data={exampleData} unitOfMeasure="%" />
            </GridItem>
            <GridItem id={'item5'} rowSpan={1} colSpan={1}>
                <FunfactSlideshow funfacts={funfacts} />
            </GridItem>
        </Grid>
    );
};

export default Home;
