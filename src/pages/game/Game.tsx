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
    cookieStorageManager,
    Center,
} from '@chakra-ui/react';
import { useEffect, useState, VoidFunctionComponent } from 'react';
import badekar from '../../assets/game/badekar.jpg';
import dusj from '../../assets/game/dusj.jpg';
import game_console from '../../assets/game/game_console.jpg';
import is from '../../assets/game/is.jpg';
import netflix from '../../assets/game/netflix.svg';
import { Text } from '@chakra-ui/react';

import CorrectG1 from '../../component/CorrectG1';
import WrongG1 from '../../component/WrongG1';
import FeedbackG2 from '../../component/FeedbackG2';
import AddHighscore from '../../component/AddHighscore';

function Game() {
    const [points, setPoints] = useState(0);
    const [gameIndex, setGameIndex] = useState(0);
    const [answer, setAnswer] = useState<string>('');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(0);

    const gameIteration = [
        {
            heading: 'Hva bruker mest strøm?',
            pic1: {
                name: 'badekar',
                img: badekar,
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
    function updateGameIndex() {
        setGameIndex(gameIndex+1);
    }

    function updateHasAnswered() {
        setHasAnswered(false);
    }

    useEffect(() => {
        if (!!answer) {
            setHasAnswered(true);
            if (answer == gameIteration[gameIndex].correct) {
                setIsCorrect(true);
                setPoints(points + 100);
            } else {
                setIsCorrect(false);
            }
        }
    }, [answer]);

    useEffect(() => {
        setHasAnswered(false);
        //console.log('gameIndex' + gameIndex);
        if (gameIndex == 2) {
            setGameOver(true);
        }
    }, [gameIndex]);

    return (
        <>
            <Heading color="white" margin="20px">
                {gameOver ? (
                    <Text color="#8BA5FF">Du fikk {points} poeng!</Text>
                ) : hasAnswered ? (
                    isCorrect ? (
                        <Text color="#597344">Correct</Text>
                    ) : (
                        <Text color="#FF5E5E">Wrong</Text>
                    )
                ) : (
                    gameIteration[gameIndex].heading
                )}
            </Heading>
            <Box bg="white" w="80%" h="70%" p={4} borderRadius="50px">
                {gameOver ? (
                    <AddHighscore points={points}></AddHighscore>
                ) : hasAnswered ? (
                    giveAnswer(
                        isCorrect,
                        gameIndex,
                        updateGameIndex,
                        updateHasAnswered
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

function giveAnswer(
    correct: boolean,
    gameIndex: number,
    updateGameIndex: any,
    updateHasAnswered: any
) {
    if (gameIndex == 0 && correct) {
        return (
            <CorrectG1
                updateGameIndex={updateGameIndex}
                updateHasAnswered={updateHasAnswered}></CorrectG1>
        );
    } else if (gameIndex == 0 && !correct) {
        return (
            <WrongG1
                updateGameIndex={updateGameIndex}
                updateHasAnswered={updateHasAnswered}></WrongG1>
        );
    } else if (gameIndex == 1) {
        return (
            <FeedbackG2
                updateGameIndex={updateGameIndex}
                updateHasAnswered={updateHasAnswered}></FeedbackG2>
        );
    }
}

export default Game;
