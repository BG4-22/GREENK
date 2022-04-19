import { Button, HStack, Image, Text, VStack } from '@chakra-ui/react';
import netflix from '../../assets/game/netflix.svg';
import playstation from '../../assets/game/playstation.png';
import tesla from '../../assets/game/tesla.png';
import '../../fonts.css';
import './Game.css';
import { Prompt } from './Prompt';

//Feedback function returns component that compares the difference between the two prompts with a random object from the comperisons list
function Feedback(props: {
    points: number;
    promptLeft: Prompt;
    promptRight: Prompt;
    updateHighscore: any;
}) {
    //Create referance to biggest and smallest prompt by comparing kWh.
    const prompts: { biggest: Prompt; smallest: Prompt } =
        props.promptLeft.kWh > props.promptRight.kWh
            ? { biggest: props.promptLeft, smallest: props.promptRight }
            : { biggest: props.promptRight, smallest: props.promptLeft };
    const difference = prompts.biggest.kWh - prompts.smallest.kWh;

    //List of objects, where one will be chosen randomly to compare against difference
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

    //Random object from comparions list
    const comp = comperisons[Math.floor(Math.random() * comperisons.length)];

    return (
        <VStack id={'feedbackStack'} spacing="14">
            <VStack id={'differenceStack'} spacing="20">
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
                    <Image id={'compImg'} src={comp.img} />
                </HStack>
            </VStack>
            <Button
                id={'nextButton'}
                size="lg"
                onClick={props.updateHighscore}>
                Neste
            </Button>
        </VStack>
    );
}

export default Feedback;
