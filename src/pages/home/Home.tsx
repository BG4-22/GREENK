import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import GreenkLogo from 'assets/images/greenk-logo.png';
import NidarvollVideo from 'assets/videos/Nidarvoll-video.mp4';
import FunfactSlideshow from '../../components/funfacts/funfact-slideshow';
import Scoreboard from '../../components/game/Scoreboard';
import SolarPanelComponent from '../../components/solarpanel';
import Competition from '../../components/CompetitionBarChart';
import SolarPanelMascot from 'components/solarpanel/SolarPanelMascot';
import './Home.css';

export interface HomePropsI {}

const funfacts: string[] = [
    'Så mye energi solcellene produserer nå tilsvarer å lade 10 iphones!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est erat, dignissim in sem nec, elementum porta neque. ',
    'Morbi feugiat, mi sed imperdiet tincidunt, sem augue commodo massa, sit amet sollicitudin velit mi vel tellus.',
    'Fusce erat lacus, posuere quis sem pulvinar, ornare congue nisi. Fusce pretium facilisis elit eu blandit. ',
    'Nullam lobortis luctus magna, nec euismod lorem mattis in. Mauris molestie tincidunt lorem vitae tincidunt. ',
];

const exampleData = [
    { name: 'Nidarvoll skole', value: 70 },
    { name: 'Gjennomsnitts- skolen i Trondheim', value: 30 },
];

const HomeWelcomeComponent: React.FC = () => {
    return (
        <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}>
            <Text fontSize={'2.5vw'} fontWeight={'bold'} color="#455B33">
                GRØNN KIOSK: Nidarvoll Skole
            </Text>
            <Box marginTop={'20px'}>
                <video
                    width="100%"
                    loop
                    autoPlay
                    style={{ borderRadius: '40px' }}>
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
