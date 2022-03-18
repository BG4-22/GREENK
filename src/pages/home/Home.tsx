import { Text } from '@chakra-ui/react';
import React from 'react';
import GameButton from '../../component/GameButton';
import nidarvollVideo from '../../assets/gjenbruk.mp4';

export interface HomePropsI {}

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <>
            <Text>Home</Text>
            <GameButton></GameButton>
            <video width="320" height="240" controls>
                <source src={nidarvollVideo} type="video/mp4"></source>
            </video>
        </>
    );
};

export default Home;
