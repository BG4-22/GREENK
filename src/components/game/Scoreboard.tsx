import { Button, List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getHighscores } from 'services/game';
import { HighscoreEntry } from 'types/game';
import FunfactCard from 'components/funfacts/funfact-card';

function Scoreboard() {
    const [highscores, setHighscores] = useState<HighscoreEntry[]>([]);
    async function updateHighscores() {
        setHighscores(await getHighscores());
    }

    useEffect(() => {
        updateHighscores();
    }, []);
    const listItems = highscores.slice(0, 5).map((item, i) => (
        <ListItem
            w={'65%'}
            margin={'auto'}
            fontSize={'1.1rem'}
            listStylePos={'inside'}
            textAlign={'left'}
            key={`$highscore-${i + 1}`}>
            {`${i + 1}. ${item.name}: ${item.score}`}
        </ListItem>
    ));

    return (
        <FunfactCard title={'Ukens highscores'}>
            <List margin={'0 auto 1rem auto'} w={'100%'}>
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
}

export default Scoreboard;
