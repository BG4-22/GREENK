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
import { fetchHighscores } from '../api/firebase';
import { HighscoreEntry } from '../api/types';

function Scoreboard() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        setHighscores(await fetchHighscores());
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
                        <Th>Navn</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {highscores.map((highscore) => {
                        return (
                            <Tr key={highscores.indexOf(highscore) + 1}>
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
