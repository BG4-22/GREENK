import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import belysning from 'assets/game/belysning.jpeg';
import kjøleskap from 'assets/game/kjøleskap.jpeg';
import klimaanlegg from 'assets/game/klimaanlegg.png';
import mikrobølgeovn from 'assets/game/mikrobølgeovn.jpeg';
import oppvaskmaskin from 'assets/game/oppvaskmaskin.jpeg';
import stekeovn from 'assets/game/stekeovn.jpeg';
import tv from 'assets/game/tv.jpeg';
import tørketrommel from 'assets/game/tørketrommel.jpeg';
import varmtvann from 'assets/game/varmtvann.jpeg';
import vaskemaskin from 'assets/game/vaskemaskin.jpeg';
import AddHighscore from 'components/game/AddHighscore';
import Counter from 'components/game/Counter';
import Feedback from 'components/game/Feedback';
import GameSlide from 'components/game/Slide';

interface Prompt {
    description: string;
    img: string;
    kWh: number;
}

function Game() {
    const [gameOver, setGameOver] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [next, setNext] = useState(false);
    const [points, setPoints] = useState(0);
    const [promptLeft, setPromptLeft] = useState<Prompt>();
    const [promptRight, setPromptRight] = useState<Prompt>();
    const [answer, setAnswer] = useState<Prompt>();
    const [highscore, setHighscore] = useState(false);
    const [loading, setLoading] = useState(true);

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
    ];

    function updatePrompts() {
        let randomPromptLeft, randomPromptRight;
        if (promptLeft) {
            randomPromptLeft = promptRight;
        } else {
            randomPromptLeft = getRandomPromt();
        }
        randomPromptRight = getRandomPromt();
        while (true) {
            if (randomPromptRight.description == randomPromptLeft?.description)
                randomPromptRight = getRandomPromt();
            else break;
        }
        setPromptLeft(randomPromptLeft);
        setPromptRight(randomPromptRight);
        setTo(randomPromptRight.kWh);
    }

    function getRandomPromt() {
        let random = Math.floor(Math.random() * prompts.length);
        return prompts[random];
    }

    function updateHasAnswered(prompt: Prompt) {
        setAnswer(prompt);
        setHasAnswered(true);
    }
    function updateHighscore() {
        setHighscore(true);
        setGameOver(false);
    }

    useEffect(() => {
        if (answer && next) {
            if (
                promptLeft &&
                promptRight &&
                answer ==
                    (promptLeft.kWh >= promptRight.kWh
                        ? promptLeft
                        : promptRight)
            ) {
                setPoints(points + 1);
            } else {
                setGameOver(true);
            }
            updatePrompts();
        }
    }, [next]);

    const from = 0;
    const [to, setTo] = useState(0);

    return (
        <div style={{ textAlign: 'center', height: '100%' }}>
            <Heading color="white" margin="20px">
                {gameOver || highscore ? (
                    <Text color="#8BA5FF">Du fikk {points} poeng!</Text>
                ) : (
                    'Hva bruker mest energi?'
                )}
            </Heading>
            {highscore ? (
                <AddHighscore points={points} />
            ) : gameOver &&
              hasAnswered &&
              answer &&
              promptLeft &&
              promptRight ? (
                <Feedback
                    points={points}
                    promptLeft={answer == promptLeft ? promptRight : promptLeft}
                    promptRight={answer}
                    updateHighscore={updateHighscore}
                />
            ) : (
                <Box
                    bg="white"
                    w="80%"
                    h="85%"
                    p={4}
                    borderRadius="50px"
                    margin="auto">
                    {!gameOver && !highscore ? (
                        <>
                            <Box
                                position="absolute"
                                zIndex="1"
                                width="5px"
                                height="68%"
                                bg="white"
                                color="black"
                                left="50%"
                                transform="translateX(-50%)"></Box>
                            <Text
                                fontWeight="bold"
                                fontSize="20px"
                                //textShadow='0px 0px 10px rgba(0, 0, 0, 0.2)'
                                position="absolute"
                                zIndex="1"
                                color="white"
                                top="8%"
                                left="85%"
                                transform="translateX(-50%)">
                                Score: {points}
                            </Text>
                        </>
                    ) : (
                        <></>
                    )}
                    {!hasAnswered ? (
                        <motion.div
                            key={promptLeft ? promptLeft.kWh + 5 : 0}
                            initial={{ x: '-50%', scale: 0 }}
                            animate={{
                                scale: [0, 1],
                                rotate: [0, 360],
                                borderRadius: ['10px', '40px'],
                            }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontWeight: 'bold',
                                position: 'absolute',
                                zIndex: '1',
                                width: '80px',
                                height: '80px',
                                borderRadius: '40px',
                                backgroundColor: 'white',
                                color: 'gray',
                                left: '50%',
                                top: '40%',
                                fontSize: '30px',
                                paddingTop: '18px',
                            }}>
                            VS
                        </motion.div>
                    ) : !next ? (
                        <motion.div
                            key={promptLeft ? promptLeft.kWh + 2 : 1}
                            initial={{ x: '-50%' }}
                            animate={{
                                scale: [1, 0],
                                rotate: [360, 0],
                                borderRadius: ['40px', '10px'],
                            }}
                            transition={{ duration: 0.25 }}
                            style={{
                                fontWeight: 'bold',
                                position: 'absolute',
                                zIndex: '1',
                                width: '80px',
                                height: '80px',
                                borderRadius: '40px',
                                backgroundColor: 'white',
                                color: 'gray',
                                left: '50%',
                                top: '40%',
                                fontSize: '30px',
                                paddingTop: '18px',
                            }}>
                            VS
                        </motion.div>
                    ) : (
                        <></>
                    )}
                    {promptLeft && promptRight ? (
                        <>
                            <Flex
                                style={{
                                    width: '100%',
                                    minWidth: '100%',
                                    maxWidth: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    borderRadius: '40px',
                                    backgroundColor: '#000000',
                                }}>
                                <div
                                    style={{
                                        minWidth: '50%',
                                        maxWidth: '50%',
                                        minHeight: '100%',
                                        position: 'relative',
                                    }}>
                                    <AnimatePresence>
                                        <motion.div
                                            style={{
                                                minHeight: '100%',
                                                position: 'absolute',
                                            }}
                                            initial={{
                                                x: loading ? '0%' : '100%',
                                            }}
                                            animate={{ x: '0%' }}
                                            transition={{
                                                duration: 1,
                                                delay: 1,
                                            }}
                                            exit={{ x: '-100%' }}
                                            key={promptLeft.kWh + 1}
                                            onAnimationComplete={(
                                                definition
                                            ) => {
                                                setNext(false);
                                                setHasAnswered(false);
                                                setLoading(false);
                                            }}>
                                            <GameSlide
                                                prompt={promptLeft}
                                                hasAnswered={true}
                                                next={false}
                                            />
                                            <Text
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    color: '#c3e0b5',
                                                    fontWeight: 'bold',
                                                    textShadow:
                                                        '0px 0px 10px rgba(0, 0, 0, 0.2)',
                                                    fontSize: 50,
                                                }}>
                                                {promptLeft.kWh} kWh
                                            </Text>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div
                                    style={{
                                        minWidth: '50%',
                                        maxWidth: '50%',
                                        minHeight: '100%',
                                        position: 'relative',
                                        justifyContent: 'center',
                                    }}>
                                    <AnimatePresence>
                                        <motion.div
                                            style={{
                                                minHeight: '100%',
                                                position: 'absolute',
                                            }}
                                            initial={{
                                                x: loading ? '0%' : '100%',
                                            }}
                                            animate={{ x: '0%' }}
                                            transition={{
                                                duration: 1,
                                                delay: 1,
                                            }}
                                            key={promptRight.kWh + 1}>
                                            <GameSlide
                                                prompt={promptRight}
                                                hasAnswered={hasAnswered}
                                                next={next}
                                            />
                                            <Text
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    color: '#c3e0b5',
                                                    fontWeight: 'bold',
                                                    textShadow:
                                                        '0px 0px 10px rgba(0, 0, 0, 0.2)',
                                                    fontSize: 50,
                                                }}
                                                visibility={
                                                    hasAnswered && !next
                                                        ? 'visible'
                                                        : 'hidden'
                                                }>
                                                {
                                                    <Counter
                                                        key={
                                                            hasAnswered ? 1 : 0
                                                        }
                                                        to={to}
                                                        from={from}
                                                        hasAnswered={
                                                            hasAnswered
                                                        }
                                                        next={next}
                                                        setNext={setNext}
                                                    />
                                                }{' '}
                                                kWh
                                            </Text>
                                        </motion.div>
                                    </AnimatePresence>
                                    <Stack
                                        direction="column"
                                        spacing={2}
                                        align="center"
                                        position="relative"
                                        top="50%"
                                        visibility={
                                            hasAnswered ? 'hidden' : 'visible'
                                        }>
                                        <Button
                                            shadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                                            textShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                                            color="white"
                                            bgColor="#c3e0b5"
                                            width="30%"
                                            borderRadius="40px"
                                            bg="#FFFFFF"
                                            size="lg"
                                            onClick={() =>
                                                updateHasAnswered(promptRight)
                                            }>
                                            Mer
                                        </Button>
                                        <Button
                                            shadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                                            textShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
                                            color="white"
                                            bgColor="#FF8585"
                                            width="30%"
                                            borderRadius="40px"
                                            bg="#FFFFFF"
                                            size="lg"
                                            onClick={() =>
                                                updateHasAnswered(promptLeft)
                                            }>
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
            )}
        </div>
    );
}

export default Game;
