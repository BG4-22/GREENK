import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
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
            noun: 'på',
            img: netflix,
            kWh: 0.077,
            timerange: 'timer',
        },
        {
            verb: 'spille',
            noun: 'på',
            img: playstation,
            kWh: 0.26,
            timerange: 'timer',
        },
        {
            verb: 'kjøre',
            noun: 'med',
            img: tesla,
            kWh: 1.49,
            timerange: 'mil',
        },
    ];
    const comp = comperisons[Math.floor(Math.random() * comperisons.length)];
    return (
        <>
            <Center fontFamily="Comic Neue">
                <Flex
                    justifyContent="center"
                    display="flex"
                    flexDirection="column"
                    width="50%"
                    height="35%"
                    backgroundColor="white"
                    position= 'absolute'
                    top='20%'
                    borderRadius='50px'>
                    <Text fontSize="xl" margin={10} marginTop="5%">
                        {prompts.biggest.description} bruker {difference}kWh mer
                        i måneden enn {prompts.smallest.description}!
                    </Text>
                    <Flex justifyContent={'center'}>
                        <Text display="flex" flexDirection="row" justifyContent="center" alignItems={'center'} fontSize="xl">
                            Det tilsvarer å {comp.verb}{' '}
                            {
                                <Text color="#8BA5FF" fontSize="2xl" margin={3}>
                                    {' '}
                                    {(difference / comp.kWh).toFixed(0)}{' '}
                                    {comp.timerange}{' '}
                                </Text>
                            }{' '}
                            {comp.noun}
                        </Text>
                        <Image src={comp.img} width="100px" objectFit="contain" marginLeft="15px"/>
                    </Flex>
                </Flex>
                <Button
                    position="absolute"
                    color="white"
                    background='#F6DC97'
                    boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
                    borderRadius='50px'
                    fontSize='25px'
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
