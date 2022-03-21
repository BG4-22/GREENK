import { Box, Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
import netflix from '../assets/game/netflix.svg';
import is from '../assets/game/is.jpg';
import { Center } from '@chakra-ui/react';
import { ListItem, List, OrderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Highscores() {
    return (
        <>
            <Heading color="white" margin="20px">
                <Text>Highscores</Text>
            </Heading>
            <Box bg="#F6DC97" width="70%" borderRadius={20} margin={5}>
                <Center>
                    <Text fontSize="xl" color="white" margin={3}>
                        Dagens beste
                    </Text>
                </Center>
                <Center>
                    <Flex>
                        <OrderedList margin={5}>
                            <ListItem>Hedda</ListItem>
                            <ListItem>Ola</ListItem>
                            <ListItem>Lisa</ListItem>
                            <ListItem>Nils</ListItem>
                        </OrderedList>
                        <List margin={5} marginLeft={20}>
                            <ListItem>2000</ListItem>
                            <ListItem>1800</ListItem>
                            <ListItem>1700</ListItem>
                            <ListItem>1670</ListItem>
                        </List>
                    </Flex>
                </Center>
            </Box>
            <Box bg="#FF8585" width="70%" borderRadius={20} margin={5}>
                <Center>
                    <Text fontSize="xl" color="white" margin={5}>
                        Ukas beste
                    </Text>
                </Center>
                <Center>
                    <Flex>
                        <OrderedList margin={5}>
                            <ListItem>Trond</ListItem>
                            <ListItem>Tiril</ListItem>
                            <ListItem>Anna</ListItem>
                            <ListItem>Jon</ListItem>
                        </OrderedList>
                        <List margin={5} marginLeft={20}>
                            <ListItem>2000</ListItem>
                            <ListItem>1800</ListItem>
                            <ListItem>1700</ListItem>
                            <ListItem>1670</ListItem>
                        </List>
                    </Flex>
                </Center>
            </Box>
            <Button borderRadius="40px" bg="#FFDD85" size="lg">
                <Link to={'/'}>Tilbake</Link>
            </Button>
        </>
    );
}

export default Highscores;
