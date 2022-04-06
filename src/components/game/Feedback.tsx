import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import netflix from '../../assets/game/netflix.svg';
import playstation from '../../assets/game/playstation.png';
import tesla from '../../assets/game/tesla.png';
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
        <VStack
            w="50%"
            mx="auto"
            spacing="14"
            mt="10vh">
            <VStack
                bgColor="white"
                w="100%"
                p="3rem"
                borderRadius="50px"
                spacing="20">
                <Text fontSize="xl">
                    {prompts.biggest.description} bruker {difference}kWh mer i
                    måneden enn {prompts.smallest.description}!
                </Text>

                <HStack>
                    <Text fontSize="xl">
                        Det tilsvarer å {comp.verb}{' '}
                        <Text as="span" color="#8BA5FF" fontSize="2xl">
                            {(difference / comp.kWh).toFixed(0)}{' '}
                            {comp.timerange}{' '}
                        </Text>
                        {comp.noun}
                    </Text>
                    <Image
                        src={comp.img}
                        width="100px"
                        objectFit="contain"
                        marginLeft="15px"
                    />
                </HStack>
            </VStack>
            <Button
                color="white"
                background="#F6DC97"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="50px"
                fontSize="25px"
                width="160px"
                height="62px"
                size="lg"
                onClick={props.updateHighscore}>
                Neste
            </Button>
        </VStack>
    );
}

export default Feedback;
