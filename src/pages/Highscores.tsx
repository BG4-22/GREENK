import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    List,
    ListItem,
    Spacer,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { HighscoreEntry } from 'types/game';
import { getHighscores } from '../services/game';

interface HighscoresPropsI {
    playAgain: () => void;
}

/**
 * Component to show highscores. The component fetches highscores from the database,
 * and maps them to entries in the list.
 * @returns
 */
const Highscores: React.FC<HighscoresPropsI> = (props: HighscoresPropsI) => {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        //Fetches highscores from the database.
        setHighscores(await getHighscores());
    }

    /**
     * The component re-renders with updated scores when a new highscore entry is added.
     */
    useEffect(() => {
        updateHighscores();
    }, []);

    /**
     * Components for name and score entry which is added into the parent-list component.
     */
    const listItemsNames = highscores.map((item, i) => (
        <ListItem
            key={`$name-${i + 1}`}
            w={'100%'}
            textAlign={'left'}
            listStyleType={'decimal'}
            listStylePos={'inside'}
            whiteSpace={'nowrap'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            bg={i % 2 !== 0 ? 'rgba(255, 255, 255, 0.2)' : undefined}
            paddingLeft={'5vw'}>
            {`${item.name}`}
        </ListItem>
    ));
    const listItemsScores = highscores.map((item, i) => (
        <ListItem
            textAlign={'center'}
            key={`$highscore-${i + 1}`}
            bg={i % 2 !== 0 ? 'rgba(255, 255, 255, 0.2)' : undefined}
            paddingLeft={'2vw'}>
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
            <Spacer />
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
            <Button onClick={props.playAgain} size="lg" variant="game">
                Spill igjen!
            </Button>
        </VStack>
    );
};

export default Highscores;
