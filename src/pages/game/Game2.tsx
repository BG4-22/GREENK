import klimaanlegg from '../../Assets/game/klimaanlegg.png';
import varmtvann from '../../Assets/game/varmtvann.jpeg'
import kjøleskap from '../../Assets/game/kjøleskap.jpeg'
import tørketrommel from '../../Assets/game/tørketrommel.jpeg'
import stekeovn from '../../Assets/game/stekeovn.jpeg'
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
    Button,
    Stack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import AddHighscore from '../../component/AddHighscore';
import { animate, AnimatePresence, motion, useAnimation } from 'framer-motion';
import { update } from 'lodash';
import Feedback from '../../component/Feedback';
import Highscores from '../highscores/Highscores';

interface Prompt{
    description: string,
    img: string,
    kWh: number
}

function Game(){
    const [gameOver, setGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [next, setNext] = useState(false);
    const [points, setPoints] = useState(0);
    const [promptLeft, setPromptLeft] = useState<Prompt>();
    const [promptRight, setPromptRight] = useState<Prompt>();
    const [answer, setAnswer] = useState<Prompt>();
    const [highscore, setHighscore] = useState(false);

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
        setNext(true)
    }

    function updateHasAnswered(prompt: Prompt) {
        setAnswer(prompt)
        setHasAnswered(true)
        setTo(prompt.kWh)
    }
    function updateHighscore(){
        setHighscore(true)
        setGameOver(false)
    }

    useEffect(() => {
        if(answer && next){
            if (promptLeft&&promptRight&&(
                    answer == (
                        promptLeft.kWh >= promptRight.kWh 
                        ? promptLeft : promptRight))) {
                    setPoints(points + 1);
                    //setIsCorrect(true);
                } else {
                    //setIsCorrect(false);
                    setGameOver(true);
                }
            updatePrompts();
        }
    }, [next]);

    const controls = useAnimation();
    /*useEffect(() => {
        console.log("animate")
        controls.start({
            x: "0%", 
            transition: {duration: 1}
        });
    }, [promptRight]);*/
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    function Counter({from, to}) {
        const nodeContainer = useRef<HTMLParagraphElement>(null);
        useEffect(() => {
            if(to != 0 && hasAnswered){
                const node = nodeContainer.current
                const controls = animate(from, to, {
                duration: 2, ease: "easeOut",
                onComplete: () => {
                    setNext(true)
                    setTo(0)
                },
                onUpdate(value) {
                    if(node){
                        node.textContent = value.toFixed(0)
                    }
                }
                });

                return () => controls.stop();
            }
        }, [to]);

        return <p style={{display: "inline-block"}} ref={nodeContainer} />;
    }

    return (
        <>
            <Heading color="white" margin="20px">
                {gameOver || highscore ? (
                    <Text color="#8BA5FF">Du fikk {points} poeng!</Text>
                ) : (
                    'Hva bruker mest energi?'
                )}
            </Heading>
            <Box bg="white" w="80%" h="70%" p={4} borderRadius="50px">
                {gameOver && (hasAnswered && answer && promptLeft && promptRight) ? (
                    <Feedback 
                    points={points} 
                    promptLeft={answer == promptLeft ? promptRight : promptLeft} 
                    promptRight={answer}
                    updateHighscore={updateHighscore}/>
                    
                    //slide animation
                ) : (highscore) ?(
                    <AddHighscore points={points}/>
                ) : (promptLeft && promptRight) ?(
                    <>
                    <Flex style={{width: "100%", minWidth: "100%", maxWidth: "100%", height: "100%", overflow: "hidden", borderRadius: "40px", backgroundColor: "#000000"}}>
                        <div style={{minWidth: "50%", maxWidth: "50%", minHeight: "100%", position: "relative"}}>
                            <AnimatePresence >
                                <motion.div 
                                    style={{minHeight:"100%", position: "absolute"}} 
                                    initial={{x: "100%",}} 
                                    animate={{x: "0%"}} 
                                    transition={{duration: 1, delay: 1}} 
                                    exit={{x: "-100%"}} 
                                    key={promptLeft.kWh+1}
                                    onAnimationComplete={definition => {
                                        setNext(false)
                                        setHasAnswered(false)
                                    }}>
                                    <div style={{minWidth: "100%", height: "100%", minHeight: "100%", position: "relative", opacity: 1}}>
                                        
                                        <Image
                                            width="100%"
                                            height="70vh"
                                            objectFit="cover"
                                            src={promptLeft.img}
                                            opacity={0.7}
                                            p={0}
                                        />
                                        <Text style={{
                                        position: "absolute", 
                                        top:"30%", 
                                        width: "100%",
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 40}}>{promptLeft.description}</Text>
                                        <Text style={{
                                        position: "absolute", 
                                        top:"50%", 
                                        width: "100%",
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 30}}>{promptLeft.kWh} kWh</Text>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div style={{minWidth: "50%", maxWidth: "50%", minHeight: "100%", position: "relative", justifyContent: "center"}}>
                            <AnimatePresence >
                                <motion.div 
                                    style={{minHeight:"100%", position: "absolute"}} 
                                    initial={{x: "100%",}} 
                                    animate={{x: "0%"}} 
                                    transition={{duration: 1, delay: 1}} 
                                    //exit={{x: "-100%"}} 
                                    key={promptRight.kWh+1}>
                                    <div style={{minWidth: "100%", height: "100%", minHeight: "100%", position: "relative"}}>
                                        
                                        <Image
                                            width="100%"
                                            height="70vh"
                                            objectFit="cover"
                                            src={promptRight.img}
                                            p={0}
                                            opacity={0.7}
                                        />
                                        <Text style={{
                                        position: "absolute", 
                                        top:"30%", 
                                        width: "100%",
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 40}}>{promptRight.description}</Text>
                                        <Text style={{
                                        position: "absolute", 
                                        top:"50%", 
                                        width: "100%",
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 30}}
                                        visibility={(hasAnswered && !next) ? "visible" : "hidden"}>{<Counter from={from} to={to}/>} kWh</Text>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <Stack direction="column" spacing={2} align='center' position="relative" top="50%"
                            visibility={hasAnswered ? "hidden" : "visible"}>
                                <Button width="30%" borderRadius="40px" bg="#FFFFFF" size="lg"
                                onClick={() => updateHasAnswered(promptRight)}>
                                    Mer
                                </Button>
                                <Button width="30%" borderRadius="40px" bg="#FFFFFF" size="lg"
                                onClick={() => updateHasAnswered(promptLeft)}>
                                    Mindre
                                </Button>
                            </Stack>
                        </div>
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
