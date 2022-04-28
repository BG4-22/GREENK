import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

import { Center } from '@chakra-ui/react';
import { useState } from 'react';
import { submitScore } from '../../services/game';
import '../../fonts.css';
import { AnimatePresence, motion } from 'framer-motion';
import './Game.css';

// Function that takes the points as a prop and returns a component that handles logic for submitting the score
function AddHighscore(props: { points: number }) {
    /* 
    Variables: 
        value: string value of input field
        added: boolean state that prohibites multiple submissions
    */
    const [value, setValue] = useState('');
    const [added, setAdded] = useState(false);

    const navigate = useNavigate();
    const navigateTo = () => navigate('/highscore');

    // Function that calls submitScore and updates state of added
    function addScore() {
        submitScore({ name: value, score: props.points });
        setAdded(true);
    }
    return (
        <>
            <Center>
                <Box id={'addHighScoreBox'}>
                    <Center>
                        <Stack>
                            <Text fontSize="xl" margin={10}>
                                Vil du legge det inn i resultatlisten? Skriv inn
                                navn og legg til!
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
                                            onClick={
                                                added ? () => {} : addScore
                                            }>
                                            Legg til
                                        </Button>
                                    </Center>
                                </motion.div>
                                <motion.div
                                    style={{
                                        visibility: added
                                            ? 'visible'
                                            : 'hidden',
                                        marginTop: '-10%',
                                    }}
                                    initial={{ scale: '0%' }}
                                    animate={{ scale: '100%' }}
                                    transition={{ duration: 0.25, delay: 0.25 }}
                                    key={added ? 10 : 5}>
                                    Nais{/* Burde oppdatere melding her */}
                                </motion.div>
                            </AnimatePresence>
                        </Stack>
                    </Center>
                </Box>
                {/* Button that navigates to "/highscore" page */}
                <Button id={'continueButton'} size="lg" onClick={navigateTo}>
                    Gå videre
                </Button>
            </Center>
        </>
    );
}

export default AddHighscore;
