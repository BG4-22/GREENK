import { Box, Button, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { submitScore } from '../../services/game';
import '../../fonts.css';
import { AnimatePresence, motion } from 'framer-motion';
import './Game.css';

function AddHighscore(props: { points: number }) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const navigateTo = () => navigate('/highscore');
    const [lagtTil, setLagtTil] = useState(false);

    useEffect(() => {
        console.log(value);
    }, [value]);

    function leggTil() {
        submitScore({ name: value, score: props.points });
        setLagtTil(true);
        console.log(lagtTil);
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
                                        visibility: lagtTil
                                            ? 'hidden'
                                            : 'visible',
                                    }}
                                    initial={{ scale: '100%' }}
                                    animate={{ scale: '100%' }}
                                    exit={{ scale: '0%' }}
                                    transition={{ duration: 0.25 }}
                                    key={lagtTil ? 1 : 0}>
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
                                        <Button
                                            id={'addButton'}
                                            size="lg"
                                            onClick={
                                                lagtTil ? () => {} : leggTil
                                            }>
                                            Legg til
                                        </Button>
                                    </Center>
                                </motion.div>
                                <motion.div
                                    style={{
                                        visibility: lagtTil
                                            ? 'visible'
                                            : 'hidden',
                                        marginTop: '-10%',
                                    }}
                                    initial={{ scale: '0%' }}
                                    animate={{ scale: '100%' }}
                                    transition={{ duration: 0.25, delay: 0.25 }}
                                    key={lagtTil ? 10 : 5}>
                                    Nais
                                </motion.div>
                            </AnimatePresence>
                        </Stack>
                    </Center>
                </Box>
                <Button id={'continueButton'} size="lg" onClick={navigateTo}>
                    Gå videre
                </Button>
            </Center>
        </>
    );
}

export default AddHighscore;
