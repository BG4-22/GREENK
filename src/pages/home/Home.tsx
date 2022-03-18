import { Text } from '@chakra-ui/react';
import React from 'react';
import GameButton from '../../component/GameButton';

export interface HomePropsI {}

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <>
            <Text>Home</Text>
            <GameButton></GameButton>
        </>
    );
};

export default Home;
