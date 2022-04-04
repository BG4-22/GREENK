import { Box, Button, Img, Text } from '@chakra-ui/react';
import netflix from '../../assets/game/netflix.svg';
import playstation from '../../Assets/game/playstation.png';
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
    const prompts: {biggest: Prompt, smallest: Prompt} = (props.promptLeft.kWh > props.promptRight.kWh) 
    ? {biggest: props.promptLeft, smallest: props.promptRight} : {biggest: props.promptRight, smallest: props.promptLeft}
    const difference = prompts.biggest.kWh - prompts.smallest.kWh
    const comperisons = [
        {
            verb: "se",
            description: 'på',
            img: netflix,
            kWh: 0.077,
            tidsramme: "timer" 
        },
        {
            verb: "spille",
            description: 'på',
            img: playstation,
            kWh: 0.26,
            tidsramme: "timer" 
        },
    ];
    const comp = comperisons[Math.floor(Math.random() * comperisons.length)]
    return (
        <Box>
            <Center>
                <Text fontSize="xl" margin={10}>
                    {prompts.biggest.description} bruker {difference}kWh mer i måneden enn {prompts.smallest.description}!
                </Text>
            </Center>
            <br></br>
            <Center>
                <Text fontSize="xl">Det tilsvarer å {comp.verb}</Text>
                <Text color="#8BA5FF" fontSize="2xl" margin={3}>
                    {' '}
                    {(difference/comp.kWh).toFixed(0)}{comp.tidsramme}{' '}
                </Text>
                <Text fontSize="xl" marginRight={3}>
                    {comp.description}
                </Text>
                <img src={comp.img} width="100px" />
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
