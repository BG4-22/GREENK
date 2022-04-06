import { Box, Button, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { submitScore } from '../../services/game';
import '../../fonts.css';
import { AnimatePresence, motion } from 'framer-motion';

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
                <Box
                    width="50%"
                    height="35%"
                    backgroundColor="white"
                    style={{
                        position: 'absolute',
                        top: '20%',
                        borderRadius: '50px',
                    }}>
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
                                            style={{
                                                color: 'white',
                                                background: '#F6DC97',
                                                boxShadow:
                                                    '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                                borderRadius: '50px',
                                            }}
                                            marginTop="5%"
                                            width="30%"
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
                <Button
                    position="absolute"
                    style={{
                        color: 'white',
                        background: '#F6DC97',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '50px',
                        fontSize: '25px',
                    }}
                    width="15%"
                    height="8%"
                    top="60%"
                    size="lg"
                    onClick={navigateTo}>
                    Gå videre
                </Button>
            </Center>
        </>
    );
}

export default AddHighscore;
