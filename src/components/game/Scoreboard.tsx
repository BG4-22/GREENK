import { List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getHighscores } from '../../services/game';
import { HighscoreEntry } from '../../types/game';
import Card from '../common/Card';
import GameButton from '../common/GameButton';
import './Game.css';

/**
 * Function that fetches highscores from the database and returns a component that renders them.
 * Also has clickable button that navigates to "/game"
 */
const Scoreboard: React.FC = () => {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);

    async function updateHighscores() {
        setHighscores(await getHighscores());
    }

    useEffect(() => {
        updateHighscores();
    }, []);

    /**
     * Only shows first 5 entries
     */
    const listItems = highscores.slice(0, 5).map((item, i) => (
        <ListItem id={'highScoreItem'} key={`$highscore-${i + 1}`}>
            {`${i + 1}. ${item.name}: ${item.score}`}
        </ListItem>
    ));

    return (
        <Card title={'Ukens highscores'}>
            <List id={'highScoreList'}>{listItems}</List>
            <GameButton>Spill nå!</GameButton>
        </Card>
    );
};

export default Scoreboard;
