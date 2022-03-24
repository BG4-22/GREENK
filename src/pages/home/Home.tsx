import {
    Grid,
    GridItem,
    Link as ChakraLink,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import GreenkLogo from '../../assets/greenk-logo.png';
import NidarvollVideo from '../../assets/Nidarvoll-video.mp4';
import { FunfactSlideshow } from '../../components/funfact-slideshow';
import Scoreboard from '../../components/Scoreboard';
import SolarPanelComponent from '../../components/solar-panel-component';
import { Navbar } from '../../layout';
import './Home.css';

export interface HomePropsI {}

// TODO: Fix hover color for navbar buttons
// TODO: fix sizes of content containers for small screen

const HomeWelcomeComponent: React.FC = () => {
    return (
        <>
            <Text
                fontSize={'2.5rem'}
                fontWeight={'bold'}
                color="#455B33"
                marginBottom="0px">
                <img
                    src={GreenkLogo}
                    width={'50px'}
                    style={{ margin: '0 auto' }}
                    alt="Greenk logo"
                />
                NIDARVOLL <span style={{ color: 'green' }}>GRØNN</span> KIOSK
            </Text>
            <video width="540px" height="540px" autoPlay loop>
                <source src={NidarvollVideo} type="video/mp4"></source>
            </video>
            <br />
            <br />
            <Stack color={'#fff'}>
                <Text fontSize={'1.9rem'} fontWeight={'bold'}>
                    Velkommen til Grønn kiosk
                </Text>
                <Text fontSize={'1.5rem'}>
                    Her kan du lære mer om hvordan Nidarvoll skole og
                    rehabiliteringssenter sparer miljøet og er miljøvennlig.
                    Visste du for eksempel at 20% på denne skolen er gjenbruk,
                    eller at solcellene akkurat nå produserer ... mye strøm.
                    <Link to={'/grønn-kiosk'}>
                        <ChakraLink color={'#ff9797'}>Lær mer her</ChakraLink>
                    </Link>
                </Text>
            </Stack>
        </>
    );
};

const HomeGrid: React.FC = (props) => {
    return (
        <Grid
            id={'grid-container'}
            h={'97vh'}
            w={'97.5%'}
            gap={'2%'}
            borderRadius={'20px'}
            gridTemplateColumns={'24% 48% 24%'}
            gridTemplateRows={'auto 10% auto 10%'}
            gridAutoFlow={'row'}>
            {props.children}
        </Grid>
    );
};

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <HomeGrid>
            <GridItem className={'grid-element'} rowSpan={2}>
                {/* Solar panel */}
                <SolarPanelComponent />
            </GridItem>
            <GridItem id={'grid-main-element'} rowSpan={3}>
                {/* main element */}
                <HomeWelcomeComponent />
            </GridItem>
            <GridItem className={'grid-element'} rowSpan={2}>
                {/* Game funfact card */}
                <Scoreboard />
            </GridItem>
            <GridItem className={'grid-element'} rowSpan={2}>
                {/* Funfact card */}
                <FunfactSlideshow />
            </GridItem>
            <GridItem className={'grid-element'} rowSpan={2}>
                {/* Power saving competition */}
                <Scoreboard />
            </GridItem>
            <GridItem
                id={'grid-navbar-element'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                minW={'30vw'}>
                {/* Navbar */}
                <Navbar />
            </GridItem>
        </HomeGrid>
    );
};

export default Home;
