import {
    Table,
    Tr,
    Td,
    Th,
    Thead,
    Tbody,
    Container,
    Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getHighscores } from '../services/game';
import { HighscoreEntry } from '../types/game';

function Scoreboard() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        setHighscores(await getHighscores());
    }

    useEffect(() => {
        updateHighscores();
    }, []);

    return (
        <Container>
            <Heading size={'md'}>Highscores</Heading>
            <Table variant={'striped'}>
                <Thead>
                    <Tr>
                        <Th />
                        <Th>Navn</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {highscores.map((highscore) => {
                        const rank = highscores.indexOf(highscore) + 1;
                        return (
                            <Tr key={rank}>
                                <Td>{rank + '.'}</Td>
                                <Td>{highscore.name}</Td>
                                <Td>{highscore.score}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Container>
    );
}

export default Scoreboard;
