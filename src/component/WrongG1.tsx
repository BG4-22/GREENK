import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import { Center } from '@chakra-ui/react';

function WrongG1(props: { updateGameIndex(): any; updateHasAnswered(): any }) {
    return (
        <Box>
            <Center>
                <Text
                    fontSize="xl"
                    color="#FF8585"
                    width="60%"
                    padding={10}
                    textAlign="center">
                    Når du dusjer i 30 min bruker du 5 kWh, mens for å ta et bad
                    må man varme opp vann som krever 14 kWh.
                </Text>
            </Center>
            <Center>
                <Flex>
                    <Text fontSize="xl" margin={3}>
                        Du kan altså se på{' '}
                    </Text>
                    <img src={netflix} width="100px" />
                </Flex>
            </Center>
            <Center>
                <Text fontSize="xl">i </Text>{' '}
                <Text color="#8BA5FF" fontSize="2xl" margin={3}>
                    {' '}
                    128 timer{' '}
                </Text>
                <Text fontSize="xl"> for strømmen du sparer.</Text>
            </Center>
            <Center>
                <Button
                    borderRadius="40px"
                    bg="#FFDD85"
                    size="lg"
                    margin={5}
                    onClick={() => {
                        props.updateGameIndex();
                        //props.updateHasAnswered();
                    }}>
                    Neste
                </Button>
            </Center>
        </Box>
    );
}

export default WrongG1;