import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react';

import netflix from '../assets/game/netflix.svg';
import is from '../assets/game/is.jpg';
import { Center } from '@chakra-ui/react';
import { ListItem, List, OrderedList } from '@chakra-ui/react';

function AddHighscore(props: { points: number }) {
    return (
        <>
            <Center>
                <Text fontSize="xl" margin={10}>
                    Vil du legge det inn i resultatlisten? Skriv inn navn og
                    legg til!
                </Text>
            </Center>
            <Center>
                <Flex>
                    <Text fontSize="2xl">Navn:</Text>
                    <Input
                        variant="filled"
                        width="50%"
                        marginLeft={5}
                        marginRight={5}
                    />

                    <Button borderRadius="40px" bg="#FFDD85" size="lg">
                        Legg til
                    </Button>
                </Flex>
            </Center>

            <Center>
                <Button borderRadius="40px" bg="#FFDD85" size="lg" margin={10}>
                    <Link to={'/highscore'}>Gå videre</Link>
                </Button>
            </Center>
        </>
    );
}

export default AddHighscore;
