import { Box, Button, Flex, Heading, Img, Spacer, Text, VStack } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import is from '../assets/game/is.jpg';
import { Center } from '@chakra-ui/react';
import { ListItem, List, OrderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HighscoreEntry } from '../../types/game';
import { getHighscores } from '../../services/game';

function Highscores() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        setHighscores(await getHighscores());
    }

    useEffect(() => {
        updateHighscores();
    }, []);

    const listItemsNames = highscores.map((item, i) => (
        <ListItem
            key={`$name-${i + 1}`}
            style={{backgroundColor: i % 2 !== 0 ? 'rgba(255, 255, 255, 0.3)' : '', wordSpacing: "1vW", whiteSpace: "nowrap", paddingLeft: "5vw"}}>
            {`${i + 1}. ${item.name}`}
        </ListItem>
    ));
    const listItemsScores = highscores.map((item, i) => (
        <ListItem
            key={`$highscore-${i + 1}`}
            style={{backgroundColor: i % 2 !== 0 ? 'rgba(255, 255, 255, 0.3)' : '', paddingLeft: "2vw"}}>
            {`${item.score}`}
        </ListItem>
    ));
    return (
        <VStack>
            <Heading color="white" margin="20px">
                <Text>Highscores</Text>
            </Heading>
            <Box bg="#F6DC97" width="30%" borderRadius={20} margin={5}>
                <Center>
                    <Text fontSize="xl" color="white" margin={3}>
                        Dagens beste
                    </Text>
                </Center>
                <Center>
                    <Flex width="100%">
                        <List margin={'0 auto 1rem auto'} w={'100%'}>
                            {listItemsNames}
                        </List>
                        <List margin={'0 auto 1rem auto'} w={'100%'}>
                            {listItemsScores}
                        </List>
                    </Flex>
                </Center>
            </Box>
            <Spacer/>
            <Box bg="#FF8585" width="30%" borderRadius={20} margin={5}>
                <Center>
                    <Text fontSize="xl" color="white" margin={3}>
                        Ukas beste
                    </Text>
                </Center>
                <Center>
                    <Flex width="100%">
                        <List margin={'0 auto 1rem auto'} w={'100%'}>
                            {listItemsNames.slice(0, 5)}
                        </List>
                        <List margin={'0 auto 1rem auto'} w={'100%'}>
                            {listItemsScores.slice(0, 5)}
                        </List>
                    </Flex>
                </Center>
            </Box>
            {/*
            <Button borderRadius="40px" bg="#FFDD85" size="lg">
                <Link to={'/'}>Tilbake</Link>
            </Button>
            */}
        </VStack>
    );
}

export default Highscores;
