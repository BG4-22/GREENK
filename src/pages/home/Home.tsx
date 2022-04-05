import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import GreenkLogo from 'assets/images/greenk-logo.png';
import NidarvollVideo from 'assets/videos/Nidarvoll-video.mp4';
import FunfactSlideshow from '../../components/funfacts/funfact-slideshow';
import Scoreboard from '../../components/game/Scoreboard';
import GameButton from '../../components/GameButton';
import SolarPanelComponent from '../../components/solarpanel';

export interface HomePropsI {}

const funfacts: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est erat, dignissim in sem nec, elementum porta neque. Vivamus eu quam quis nisi tincidunt feugiat. Vivamus viverra eros nec sagittis fermentum.',
    'Morbi feugiat, mi sed imperdiet tincidunt, sem augue commodo massa, sit amet sollicitudin velit mi vel tellus. Aenean sollicitudin velit nec vulputate volutpat. Donec metus erat, ultricies non urna et, vestibulum efficitur nisl. Proin venenatis metus enim, non aliquet neque mattis et. Nunc a dui tincidunt, mattis quam vel, condimentum sapien. Nulla cursus, risus in vehicula ultrices, nulla eros vulputate risus, sed porta nulla sapien a lectus.',
    'Fusce erat lacus, posuere quis sem pulvinar, ornare congue nisi. Fusce pretium facilisis elit eu blandit. Phasellus eget metus eu mi sodales aliquam. Nullam viverra enim eget velit dapibus malesuada.',
    'Nullam lobortis luctus magna, nec euismod lorem mattis in. Mauris molestie tincidunt lorem vitae tincidunt. Ut molestie lobortis mi, vel condimentum augue cursus vitae.',
];

const HomeWelcomeComponent: React.FC = () => {
    return (
        <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}>
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
            <video width="90%" autoPlay loop style={{ borderRadius: '40px' }}>
                <source src={NidarvollVideo} type="video/mp4"></source>
            </video>
            {/* <br />
            <br />
            <Stack color={'#fff'}>
                <Text fontSize={'1.9rem'} fontWeight={'bold'}>
                    Velkommen til Grønn kiosk
                </Text>
                <Text fontSize={'1.5rem'} textAlign={'left'}>
                    Her kan du lære mer om hvordan Nidarvoll skole og
                    rehabiliteringssenter sparer miljøet og er miljøvennlig.
                    Visste du for eksempel at 20% på denne skolen er gjenbruk,
                    eller at solcellene akkurat nå produserer ... mye strøm.
                    <Link to={'/grønn-kiosk'}>
                        <ChakraLink color={'#ff9797'}>Lær mer her</ChakraLink>
                    </Link>
                </Text>
            </Stack> */}
        </Box>
    );
};

// TODO: Fix hover color for navbar buttons
// TODO: fix sizes of content containers for small screen

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <Grid
            h="85vh"
            margin={'1rem'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={25}>
            <GridItem
                rowSpan={1}
                colSpan={1}
                p={'1rem'}
                borderRadius={'40px'}
                bg="rgba(255,255,255,0.2)">
                <Text>SOLCELLE</Text>
                <SolarPanelComponent />
            </GridItem>
            <GridItem
                rowSpan={2}
                colSpan={2}
                p={'1rem'}
                borderRadius={'40px'}
                bg="rgba(255,255,255,0.8)">
                <HomeWelcomeComponent />
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                p={'1rem'}
                borderRadius={'40px'}
                bg="rgba(255,255,255,0.2)">
                <Text>SPILL</Text>
                <GameButton></GameButton>
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                p={'1rem'}
                borderRadius={'40px'}
                bg="rgba(255,255,255,0.2)">
                <Scoreboard />
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                p={'1rem'}
                borderRadius={'40px'}
                bg="rgba(255,255,255,0.2)">
                <FunfactSlideshow funfacts={funfacts} />
            </GridItem>
        </Grid>
    );
};

export default Home;
