import { List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getHighscores } from '../../services/game';
import { HighscoreEntry } from '../../types/game';
import FunfactCard from '../funfacts/funfact-card';
import GameButton from '../GameButton';
import './Game.css';

function Scoreboard() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        setHighscores(await getHighscores());
    }

    useEffect(() => {
        updateHighscores();
    }, []);
    const listItems = highscores.slice(0, 5).map((item, i) => (
        <ListItem id={'highScoreItem'} key={`$highscore-${i + 1}`}>
            {`${i + 1}. ${item.name}: ${item.score}`}
        </ListItem>
    ));

    return (
        <FunfactCard title={'Ukens highscores'}>
            <List id={'highScoreList'}>{listItems}</List>
            <GameButton />
        </FunfactCard>
    );
}

export default Scoreboard;
