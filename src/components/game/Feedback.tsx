import { Box, Button, Img, Text } from '@chakra-ui/react';
import netflix from '../../assets/game/netflix.svg';
import playstation from '../../Assets/game/playstation.png';
import tesla from '../../Assets/game/tesla.png';
import { Center } from '@chakra-ui/react';
import '../../fonts.css';

interface Prompt {
    description: string;
    img: string;
    kWh: number;
}
function Feedback(props: {
    points: number;
    promptLeft: Prompt;
    promptRight: Prompt;
    updateHighscore: any;
}) {
    const prompts: { biggest: Prompt; smallest: Prompt } =
        props.promptLeft.kWh > props.promptRight.kWh
            ? { biggest: props.promptLeft, smallest: props.promptRight }
            : { biggest: props.promptRight, smallest: props.promptLeft };
    const difference = prompts.biggest.kWh - prompts.smallest.kWh;
    const comperisons = [
        {
            verb: 'se',
            description: 'på',
            img: netflix,
            kWh: 0.077,
            tidsramme: 'timer',
        },
        {
            verb: 'spille',
            description: 'på',
            img: playstation,
            kWh: 0.26,
            tidsramme: 'timer',
        },
        {
            verb: 'kjøre',
            description: 'med',
            img: tesla,
            kWh: 1.49,
            tidsramme: 'mil',
        },
    ];
    const comp = comperisons[Math.floor(Math.random() * comperisons.length)];
    return (
        <>
            <Center fontFamily="Comic Neue">
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
                        <Text fontSize="xl" margin={10} marginTop="10%">
                            {prompts.biggest.description} bruker {difference}kWh
                            mer i måneden enn {prompts.smallest.description}!
                        </Text>
                    </Center>
                    <br></br>
                    <Center>
                        <Text fontSize="xl">Det tilsvarer å {comp.verb}</Text>
                        <Text color="#8BA5FF" fontSize="2xl" margin={3}>
                            {' '}
                            {(difference / comp.kWh).toFixed(0)}{' '}
                            {comp.tidsramme}{' '}
                        </Text>
                        <Text fontSize="xl" marginRight={3}>
                            {comp.description}
                        </Text>
                        <img src={comp.img} width="100px" />
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
                    onClick={props.updateHighscore}>
                    Neste
                </Button>
            </Center>
        </>
    );
}

export default Feedback;
