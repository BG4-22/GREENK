import { Box, Button, Center, Input, Stack, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../../fonts.css';
import Highscores from '../../pages/Highscores';
import { submitScore } from '../../services/game';
import './Game.css';

interface AddHighscorePropsI {
    points: number;
    playAgain: () => void;
}

/**
 * Function that takes the points as a prop and returns a component that handles logic for submitting the score
 */
const AddHighscore: React.FC<AddHighscorePropsI> = (
    props: AddHighscorePropsI
) => {
    /**
     * Variables:
     *    value: string value of input field
     *    added: boolean state that prohibites multiple submissions
     *    empty: wether name is empty
     */

    const [value, setValue] = useState('');
    const [added, setAdded] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [showHighScores, setShowHighScores] = useState(false);

    /**
     * Function that calls submitScore and updates state of added
     */
    function addScore() {
        if (value) {
            submitScore({ name: value, score: props.points });
            setAdded(true);
        } else {
            setEmpty(true);
        }
    }

    /**
     * Effect which makes the input field blink red if the user
     * tries to submit score with an empty name
     */
    useEffect(() => {
        const timeout = setTimeout(() => {
            setEmpty(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, [empty]);

    return (
        <>
            {!showHighScores ? (
                <Center>
                    <Box id={'addHighScoreBox'}>
                        <Center>
                            <Stack>
                                <Text fontSize="xl" margin={10}>
                                    Vil du legge det inn i resultatlisten? Skriv
                                    inn navn og legg til!
                                </Text>
                                <AnimatePresence>
                                    <motion.div
                                        style={{
                                            visibility: added
                                                ? 'hidden'
                                                : 'visible',
                                        }}
                                        initial={{ scale: '100%' }}
                                        animate={{ scale: '100%' }}
                                        exit={{ scale: '0%' }}
                                        transition={{ duration: 0.25 }}
                                        key={added ? 1 : 0}>
                                        <Center>
                                            <Text fontSize="2xl">Navn:</Text>
                                            <Input
                                                variant="filled"
                                                borderRadius="20px"
                                                width="50%"
                                                marginLeft={5}
                                                marginRight={5}
                                                placeholder={
                                                    !empty
                                                        ? 'Skriv inn navn'
                                                        : 'Navn kan ikke være tom!'
                                                }
                                                border={!empty ? 'none' : '2px'}
                                                borderColor={'#FF8585'}
                                                onChange={(e) =>
                                                    setValue(e.target.value)
                                                }
                                            />
                                        </Center>
                                        <Center>
                                            {/* Button that calls addScore if added is false */}
                                            <Button
                                                id={'addButton'}
                                                size="lg"
                                                variant="game"
                                                onClick={
                                                    added ? () => {} : addScore
                                                }>
                                                Legg til!
                                            </Button>
                                        </Center>
                                    </motion.div>
                                    <motion.div
                                        style={{
                                            visibility: added
                                                ? 'visible'
                                                : 'hidden',
                                            marginTop: '-130px',
                                        }}
                                        initial={{ scale: '0%' }}
                                        animate={{ rotate: 360, scale: '100%' }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.25,
                                            type: 'spring',
                                        }}
                                        key={added ? 10 : 5}>
                                        <Text fontSize={100}>&#128077;</Text>
                                    </motion.div>
                                </AnimatePresence>
                            </Stack>
                        </Center>
                    </Box>
                    {/* Button that navigates to "/highscore" page */}
                    <Button
                        id={'continueButton'}
                        variant="gameNavigation"
                        size="lg"
                        onClick={() => setShowHighScores(true)}>
                        Gå videre
                    </Button>
                </Center>
            ) : (
                <Highscores playAgain={props.playAgain} />
            )}
        </>
    );
};

export default AddHighscore;
