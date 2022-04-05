import { Image, Text } from '@chakra-ui/react';

interface Prompt {
    description: string;
    img: string;
    kWh: number;
}

function GameSlide(props: {
    prompt: Prompt;
    hasAnswered: boolean;
    next: boolean;
}) {
    return (
        <>
            <div
                style={{
                    minWidth: '100%',
                    height: '100%',
                    minHeight: '100%',
                    position: 'relative',
                }}>
                <Image
                    width="100%"
                    height="70vh"
                    objectFit="cover"
                    src={props.prompt.img}
                    p={0}
                    opacity={0.7}
                />
                <Text
                    style={{
                        position: 'absolute',
                        top: '30%',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                        fontSize: 40,
                    }}>
                    {props.prompt.description}
                </Text>
                <Text
                    top={props.hasAnswered && !props.next ? '43%' : '40%'}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                        fontSize: 20,
                    }}>
                    bruker i snitt
                </Text>
                <Text
                    top={props.hasAnswered && !props.next ? '65%' : '68%'}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                        fontSize: 20,
                    }}>
                    i måneden
                </Text>
            </div>
        </>
    );
}

export default GameSlide;
