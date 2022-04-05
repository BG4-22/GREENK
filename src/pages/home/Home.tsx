import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import GreenkLogo from 'assets/images/greenk-logo.png';
import NidarvollVideo from 'assets/videos/Nidarvoll-video.mp4';
import FunfactSlideshow from '../../components/funfacts/funfact-slideshow';
import Scoreboard from '../../components/game/Scoreboard';
import SolarPanelComponent from '../../components/solarpanel';
import Competition from '../../components/CompetitionBarChart';
import SolarPanelMascot from 'components/solarpanel/SolarPanelMascot';

export interface HomePropsI {}

const funfacts: string[] = [
    'Så mye energi solcellene produserer nå tilsvarer å lade 10 iphones!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent est erat, dignissim in sem nec, elementum porta neque. Vivamus eu quam quis nisi tincidunt feugiat. Vivamus viverra eros nec sagittis fermentum.',
    'Morbi feugiat, mi sed imperdiet tincidunt, sem augue commodo massa, sit amet sollicitudin velit mi vel tellus. Aenean sollicitudin velit nec vulputate volutpat. Donec metus erat, ultricies non urna et, vestibulum efficitur nisl. Proin venenatis metus enim, non aliquet neque mattis et. Nunc a dui tincidunt, mattis quam vel, condimentum sapien. Nulla cursus, risus in vehicula ultrices, nulla eros vulputate risus, sed porta nulla sapien a lectus.',
    'Fusce erat lacus, posuere quis sem pulvinar, ornare congue nisi. Fusce pretium facilisis elit eu blandit. Phasellus eget metus eu mi sodales aliquam. Nullam viverra enim eget velit dapibus malesuada.',
    'Nullam lobortis luctus magna, nec euismod lorem mattis in. Mauris molestie tincidunt lorem vitae tincidunt. Ut molestie lobortis mi, vel condimentum augue cursus vitae.',
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
            <Text fontSize={'2.5rem'} fontWeight={'bold'} color="#455B33">
                GRØNN KIOSK: Nidarvoll Skole
            </Text>
            <Box marginTop={'70px'}>
                <video width="100%" loop style={{ borderRadius: '40px' }}>
                    <source src={NidarvollVideo} type="video/mp4"></source>
                </video>
            </Box>
        </Box>
    );
};

// TODO: fix sizes of content containers for small screen

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <Grid
            h="100%"
            margin={'1rem'}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={25}>
            <GridItem
                rowSpan={1}
                colSpan={1}
                gridColumn="1"
                gridRow="1"
                p={'1rem'}
                display={'flex'}
                alignItems="center">
                <SolarPanelMascot />
            </GridItem>
            <GridItem
                rowSpan={2}
                colSpan={2}
                p={'1rem'}
                borderRadius={'40px'}
                gridColumnStart="2">
                <HomeWelcomeComponent />
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                gridColumn="4"
                gridRow="1"
                h={'100%'}
                minH={'100%'}
                p={'1rem'}
                display={'flex'}
                alignItems="center"
            >
                <Scoreboard />
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                gridColumn="1"
                gridRow="2"
                p={'1rem'}
                borderRadius={'40px'}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'flex-start'}>
                <Competition data={exampleData} unitOfMeasure="%" />
            </GridItem>
            <GridItem
                rowSpan={1}
                colSpan={1}
                gridColumn="4"
                gridRow="2"
                h={'100%'}
                p={'1rem'}
                borderRadius={'40px'}
                display={'flex'}
                textOverflow={'ellipse'}>
                <FunfactSlideshow funfacts={funfacts} />
            </GridItem>
        </Grid>
    );
};

export default Home;
