import { Box, Button, Img, Text } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import { Center } from '@chakra-ui/react';

function CorrectG1(props: {
    updateGameIndex(): any;
    updateHasAnswered(): any;
}) {
    return (
        <Box>
            <Center>
                <Text fontSize="xl" margin={10}>
                    For å ta et bad må man varme opp vann som krever 14 kWh.
                </Text>
            </Center>
            <br></br>
            <Center>
                <Text fontSize="xl">Det tilsvarer å se </Text>
                <Text color="#8BA5FF" fontSize="2xl" margin={3}>
                    {' '}
                    181 timer{' '}
                </Text>
                <Text fontSize="xl" marginRight={3}>
                    på
                </Text>
                <img src={netflix} width="100px" />
            </Center>
            <Center>
                <Button
                    borderRadius="40px"
                    bg="#FFDD85"
                    size="lg"
                    margin={10}
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

export default CorrectG1;
