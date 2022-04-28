import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import NidarvollVideo from 'assets/videos/NidarvollGjenbruk-video.mp4';
import Competition from '../../components/competition/Competition';
import FunfactSlideshow from '../../components/funfacts/funfact-slideshow';
import Scoreboard from '../../components/game/Scoreboard';
import SolarPanelComponent from '../../components/solarpanel/SolarPanelComponent';
import React from 'react';
import './Home.css';

/**
 * The "main page" component. Combines different components to make a whole page.
 */

export interface HomePropsI {}

/**
 * List of funfacts to add as props in the funfact-component.
 */
const funfacts: string[] = [
    'Hvis man samler all solenergi som treffer jorda på 60 minutter, er det nok energi for hele verden i ett år.',
    'En vindmølle lager nok energi til 1400 hus.  ',
    'Elektrisitet i stømledningene går like fort som lyset.',
    'Fugler kan sitte på en strømledning uten å få støt, men hvis de er borti to samtidig lager de en sluttet krets og kan dø.',
    'Fornybar energi kommer fra kilder som vind, sol, vann og jordvarme. Nidarvoll skole bruker 80% fornybar energi ',
    'Mesteparten av energien vi bruker i verden i dag kommer fra ikke fornybar energi som kull, olje og gass. ',
    'Ikke fornybar energi forurenser masse og verdens kull, olje og gass brukes opp!',
];

/**
 * Example data to pass as props in the competition component.
 */
const exampleData = [
    { name: 'Vår skole', value: 70 },
    { name: 'Andre skoler', value: 30 },
];

const HomeWelcomeComponent: React.FC = () => {
    return (
        <Box id={'welcomeBox'}>
            <Text id={'greenK'}>GRØNN KIOSK</Text>
            <Box marginTop={'70px'}>
                <video width="100%" loop autoPlay>
                    <source src={NidarvollVideo} type="video/mp4"></source>
                </video>
            </Box>
        </Box>
    );
};
/**
 * Arranges the different components in a grid.
 * @param props
 * @returns Home component
 */
const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <Grid id="grid">
            <GridItem id={'item1'} rowSpan={1} colSpan={1}>
                <SolarPanelComponent />
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
