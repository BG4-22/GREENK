import { Box, Button, Img, Text } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import { Center } from '@chakra-ui/react';

interface Prompt{
    description: string,
    img: string,
    kWh: number
}
function Feedback(props: {
    points: number;
    promptLeft: Prompt;
    promptRight: Prompt;
    updateHighscore: any;
}) {
    return (
        <Box>
            <Center>
                <Text fontSize="xl" margin={10}>
                    {props.promptLeft.description} bruker {props.promptLeft.kWh - props.promptRight.kWh}kWh mer i måneden enn {props.promptRight.description}!
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
                        props.updateHighscore()
                    }}>
                    Neste
                </Button>
            </Center>
        </Box>
    );
}

export default Feedback;
