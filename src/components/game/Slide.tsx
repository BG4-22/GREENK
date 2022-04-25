import { Box, Image, Text } from '@chakra-ui/react';
import './Game.css';
import { Prompt } from './Prompt';

function GameSlide(props: {
    prompt: Prompt;
    hasAnswered: boolean;
    next: boolean;
}) {
    return (
        <>
            <Box id={'gameSlideContainer'}>
                <Image id={'gameSlideImage'} src={props.prompt.img} />
                <Text id={'slideDescription'} className={'slideText'}>
                    {props.prompt.description}
                </Text>
                <Text
                    id={'onAveragePrompt'}
                    className={'slideText'}
                    top={props.hasAnswered && !props.next ? '43%' : '40%'}>
                    bruker i snitt
                </Text>
                <Text
                    className={'slideText'}
                    id={'monthlyPrompt'}
                    top={props.hasAnswered && !props.next ? '65%' : '68%'}>
                    i måneden
                </Text>
            </Box>
        </>
    );
}

export default GameSlide;
