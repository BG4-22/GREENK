import { Button, List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getScores } from '../api';
import { HighscoreEntry } from '../api/types';
import FunfactCard from './funfact-card';

function Scoreboard() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    useEffect(() => {
        getScores().then((data) => setHighscores(data));
    }, []);
    const listItems = highscores.map((item, i) => (
        <ListItem
            w={'65%'}
            margin={'auto'}
            fontSize={'1.1rem'}
            listStylePos={'inside'}
            textAlign={'left'}
            key={`item-${item.name}`}>
            {item.name}
        </ListItem>
    ));

    return (
        <FunfactCard title={'Ukens highscores'}>
            <List
                margin={'0 auto 1rem auto'}
                listStyleType={'decimal'}
                w={'100%'}>
                {listItems}
            </List>
            <Button
                padding={'1rem'}
                margin={'0 auto'}
                bg={'#FFDD85'}
                w={'fit-content'}
                borderRadius={'2rem'}>
                Spill nå!
            </Button>
        </FunfactCard>
    );

    // return (
    //     <Container>
    //         <Heading size={'md'}>Highscores</Heading>
    //         <Table variant={'striped'}>
    //             <Thead>
    //                 <Tr>
    //                     <Th>Navn</Th>
    //                     <Th>Score</Th>
    //                 </Tr>
    //             </Thead>
    //             <Tbody>
    //                 {highscores.map((highscore) => {
    //                     return (
    //                         <Tr key={highscores.indexOf(highscore) + 1}>
    //                             <Td>{highscore.name}</Td>
    //                             <Td>{highscore.score}</Td>
    //                         </Tr>
    //                     );
    //                 })}
    //             </Tbody>
    //         </Table>
    //     </Container>
    // );
}

export default Scoreboard;
