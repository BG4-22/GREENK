import { Box, Image, Text } from '@chakra-ui/react';
import './Game.css';
import { Prompt } from './Prompt';

/**
 * prompt: object to compare against
 * hasAnswered: if the user has answered or not
 * next: game is ready for the next slide
 */
interface GameSlidePropsI {
    prompt: Prompt;
    hasAnswered: boolean;
    next: boolean;
}

/**
 * Image and description for a game slide
 */
const GameSlide: React.FC<GameSlidePropsI> = (props: GameSlidePropsI) => {
    return (
        <Box id={'gameSlideContainer'}>
            <Image className={'gameSlideImage'} src={props.prompt.img} />
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
    );
};

export default GameSlide;
