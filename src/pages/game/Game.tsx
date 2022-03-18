import {
    Button,
    ButtonGroup,
    Stack,
    Image,
    Box,
    Heading,
    Flex,
    Spacer,
    Grid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import badekar from '../../assets/game/badekar.jpg';
import dusj from '../../assets/game/dusj.jpg';
import game_console from '../../assets/game/game_console.jpg';
import netflix from '../../assets/game/netflix.svg';
import { Text } from '@chakra-ui/react';

import CorrectG1 from '../../component/CorrectG1';
import WrongG1 from '../../component/WrongG1';

function Game() {
    const [points, setPoints] = useState(0);
    const [gameIndex, setGameIndex] = useState(0);
    const [answer, setAnswer] = useState<string>('');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const elements = ['dusj.JPG', 'game_console.JPG', 'lys.jpg', 'badekar.jpg'];

    const gameIteration = [
        {
            heading: 'Hva bruker mest strøm?',
            pic1: {
                name: 'badekar',
                img: badekar,
                message:
                    'For å ta et bad må man varme opp vann som krever 14 kWh.',
            },
            pic2: { name: 'dusj', img: dusj },
            correct: 'badekar',
        },
        {
            heading: 'Hva bruker mest strøm?',
            pic1: { name: 'game_console', img: game_console },
            pic2: { name: 'netflix', img: netflix },
            correct: 'game_console',
        },
    ];

    useEffect(() => {
        if (!!answer) {
            setHasAnswered(true);
            if (answer == gameIteration[gameIndex].correct) {
                setIsCorrect(true);
                setPoints(points + 100);
            }
        }
    }, [answer]);

    return (
        <>
            <Heading color="white" margin="20px">
                {hasAnswered ? (
                    isCorrect ? (
                        <Text>Correct</Text>
                    ) : (
                        <Text>Wrong</Text>
                    )
                ) : (
                    gameIteration[gameIndex].heading
                )}
            </Heading>
            <Box bg="white" w="80%" h="70%" p={4} borderRadius="50px">
                {hasAnswered ? (
                    isCorrect ? (
                        <Text> Correct</Text>
                    ) : (
                        <Text>Wrong</Text>
                    )
                ) : (
                    <Flex>
                        <Image
                            src={gameIteration[gameIndex].pic1.img}
                            width="40%"
                            p={4}
                            onClick={() =>
                                setAnswer(gameIteration[gameIndex].pic1.name)
                            }
                        />
                        <Spacer />
                        <Image
                            src={gameIteration[gameIndex].pic2.img}
                            width="40%"
                            p={4}
                            onClick={(evt) =>
                                setAnswer(gameIteration[gameIndex].pic2.name)
                            }
                        />
                    </Flex>
                )}
            </Box>
        </>
    );
}

function checkAnswer(correct: boolean) {
    if (correct) {
        return <CorrectG1></CorrectG1>;
    } else {
        return <WrongG1></WrongG1>;
    }
}

export default Game;
