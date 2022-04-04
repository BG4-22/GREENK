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
import AddHighscore from '../../components/game/AddHighscore';
interface Answer{
    heading: string,
    pic: Img,
    kWh: number
}
interface Img{
    name: string,
    img: string
}
function Game() {
    const [currentAnswer, setCurrentAnswer] = useState<Answer>();
    const [currentQuestion, setCurrentQuestion] = useState<Answer>();
    const [points, setPoints] = useState(0);
    const [gameIndex, setGameIndex] = useState(0);
    const [answer, setAnswer] = useState<string>('');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(0);

    const answers = [
        {
            heading: 'Dusje i 30 min',
            pic: { name: 'dusj', img: dusj },
            kWh: 5,
        },
        {
            heading: 'Ta et bad',
            pic: { name: 'badekar', img: badekar },
            kWh: 14,
        },
        {
            heading: 'Se på tv',
            pic: { name: 'badekar', img: badekar },
            kWh: 14,
        },
    ]

    /*const gameIteration = [
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
    ];*/
    function updateGameIndex() {
        setGameIndex(gameIndex +1);
    }

    function updateHasAnswered() {
        setHasAnswered(false);
    }

    function updateQuestion() {
        if (currentAnswer) {
            setCurrentAnswer(currentQuestion)
            setCurrentQuestion(getRandomQuestion())
        } else {
            setCurrentAnswer(getRandomQuestion())
            setCurrentQuestion(getRandomQuestion())
        }
    }
    function getRandomQuestion()
    {
        let random = Math.floor(Math.random() * answers.length);
        return answers[random]
    }

    useEffect(() => {
        if (!!answer) {
            setHasAnswered(true);
            if (currentAnswer&&currentQuestion&&(
                answer == (
                    currentAnswer?.kWh >= currentQuestion?.kWh 
                    ? currentAnswer?.pic.name : currentQuestion?.pic.name))) {
                setIsCorrect(true);
                setPoints(points + 100);
                updateQuestion();
            } else {
                setIsCorrect(false);
            }
        }
    }, [answer]);

    useEffect(() => {
        setHasAnswered(false);
        //console.log('gameIndex' + gameIndex);
        if (gameIndex == 10) {
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
                        <Text color="#597344">Riktig</Text>
                    ) : (
                        <Text color="#FF5E5E">Feil</Text>
                    )
                ) : (
                    'Hva bruker mest energi?'
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
                        updateHasAnswered,
                        updateQuestion
                    )
                ) : currentAnswer&&currentQuestion ? (
                    <>{console.log(currentAnswer)}
                        <Flex>
                        <Image
                            src={currentAnswer.pic.img}
                            width="40%"
                            p={4}
                            onClick={() =>
                                setAnswer(currentAnswer.pic.name)
                            }
                        />
                        <Spacer />
                        <Image
                            src={currentQuestion.pic.img}
                            width="40%"
                            p={4}
                            onClick={(evt) =>
                                setAnswer(currentAnswer.pic.img)
                            }
                        />
                    </Flex></>
                ) : <>{updateQuestion()}</>}
            </Box>
        </>
    );
}

function giveAnswer(
    correct: boolean,
    gameIndex: number,
    updateGameIndex: any,
    updateHasAnswered: any,
    updateQuestion: any
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
    } else {
        return (
            <FeedbackG2
                updateGameIndex={updateGameIndex}
                updateHasAnswered={updateHasAnswered}></FeedbackG2>
        );
    }
}

export default Game;
