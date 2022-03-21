import { Box, Button, Flex, Img, Text } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import is from '../assets/game/is.jpg';
import { Center } from '@chakra-ui/react';

function FeedbackG2(props: {
    updateGameIndex(): any;
    updateHasAnswered(): any;
}) {
    return (
        <Box>
            <Center>
                <Text
                    fontSize="xl"
                    color="#FF8585"
                    width="60%"
                    padding={10}
                    textAlign="center">
                    Det krever 0,5 kWh mer å spille Playstation enn å se på
                    Netflix.
                </Text>
            </Center>
            <Center>
                <Flex>
                    <Text fontSize="xl" marginTop={10}>
                        Det tilsvarer samme forbruk som å produsere 100
                    </Text>
                    <img src={is} width="100px" />
                </Flex>
            </Center>
            <Center>
                <Button
                    borderRadius="40px"
                    bg="#FFDD85"
                    size="lg"
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

export default FeedbackG2;
