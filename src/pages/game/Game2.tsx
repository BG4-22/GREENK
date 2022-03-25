import klimaanlegg from '../../Assets/game/klimaanlegg.png';
import varmtvann from '../../Assets/game/varmtvann.jpeg'
import kjøleskap from '../../Assets/game/kjøleskap.jpeg'
import tørketrommel from '../../Assets/game/tørketrommel.jpeg'
import stekeovn from '../../Assets/game/stekeovn.png'
import belysning from '../../Assets/game/belysning.jpeg'
import oppvaskmaskin from '../../Assets/game/oppvaskmaskin.jpeg'
import tv from '../../Assets/game/tv.jpeg'
import mikrobølgeovn from '../../Assets/game/mikrobølgeovn.jpeg'
import vaskemaskin from '../../Assets/game/vaskemaskin.jpeg'
import {
    Image,
    Box,
    Heading,
    Flex,
    Spacer,
    Text,
    usePrefersReducedMotion,
    keyframes,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import AddHighscore from '../../component/AddHighscore';
import { update } from 'lodash';

interface Prompt{
    description: string,
    img: string,
    kWh: number
}

function Game(){
    const [gameOver, setGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [points, setPoints] = useState(0);
    const [promptLeft, setPromptLeft] = useState<Prompt>();
    const [promptRight, setPromptRight] = useState<Prompt>();
    const [answer, setAnswer] = useState<Prompt>();

    /*Central Air Conditioner (2 ton): 1450 kWh/month
    Water Heater (4-person household): 310/kWh/month
    Refrigerator (17-20 cubic foot): 205 kWh/month
    Dryer: 75 kWh/month
    Oven Range: 58 kWh/month
    Lighting 4-5 room household: 50 kWh/month
    Dishwasher: 30 kWh/month
    Television: 27 kWh/month
    Microwave: 16 kWh/month
    Washing Machine: 9 kWh/month*/
    const prompts = [
        {
            description: 'Klimaanlegg i hus',
            img: klimaanlegg,
            kWh: 1450,
        },
        {
            description: 'Varmtvann',
            img: varmtvann,
            kWh: 310,
        },
        {
            description: 'Kjøleskap',
            img: kjøleskap,
            kWh: 205,
        },
        {
            description: 'Tørketrommel',
            img: tørketrommel,
            kWh: 75,
        },
        {
            description: 'Stekeovn',
            img: stekeovn,
            kWh: 58,
        },
        {
            description: 'Belysning',
            img: belysning,
            kWh: 50,
        },
        {
            description: 'Oppvaskmaskin',
            img: oppvaskmaskin,
            kWh: 30,
        },
        {
            description: 'TV',
            img: tv,
            kWh: 27,
        },
        {
            description: 'Mikrobølgeovn',
            img: mikrobølgeovn,
            kWh: 16,
        },
        {
            description: 'Vaskemaskin',
            img: vaskemaskin,
            kWh: 9,
        },
    ]

    function updatePrompts() {
        let randomPromptLeft, randomPromptRight
        if (promptLeft){
            randomPromptLeft = promptRight
        }
        else {
            randomPromptLeft = getRandomPromt()
        }
        randomPromptRight = getRandomPromt()
        while (true){
            if (randomPromptRight.description == randomPromptLeft?.description)
                randomPromptRight = getRandomPromt()
            else break
        }
        setPromptLeft(randomPromptLeft)
        setPromptRight(randomPromptRight)
    }

    function getRandomPromt()
    {
        let random = Math.floor(Math.random() * prompts.length);
        return prompts[random]
    }

    function handleAnswer(prompt: Prompt){
        setAnswer(prompt)
        setHasAnswered(!hasAnswered);
    }

    useEffect(() => {
        if(answer){
            if (promptLeft&&promptRight&&(
                    answer == (
                        promptLeft.kWh >= promptRight.kWh 
                        ? promptLeft : promptRight))) {
                    setPoints(points + 1);
                } else {
                    setGameOver(true);
                }
            updatePrompts();
        }
    }, [hasAnswered]);

    return (
        <>
            <Heading color="white" margin="20px">
                {gameOver ? (
                    <Text color="#8BA5FF">Du fikk {points} poeng!</Text>
                ) : (
                    'Hva bruker mest energi?'
                )}
            </Heading>
            <Box bg="white" w="80%" h="70%" p={4} borderRadius="50px">
                {gameOver ? (
                    <AddHighscore points={points}></AddHighscore>
                    //slide animation
                ) : (promptLeft && promptRight) ?(
                    <>
                    <Flex>
                        <Text>{promptLeft.description}</Text>
                        <Image
                            src={promptLeft.img}
                            width="40%"
                            p={4}
                            onClick={() =>
                                handleAnswer(promptLeft)
                            }
                        />
                        <Spacer />
                        <Text>{promptRight.description}</Text>
                        <Image
                            src={promptRight.img}
                            width="40%"
                            p={4}
                            onClick={() =>
                                handleAnswer(promptRight)
                            }
                        />
                    </Flex>
                    </>
                ) : (
                    <>{updatePrompts()}</>
                )}
            </Box>
        </>
    );
}

export default Game;
