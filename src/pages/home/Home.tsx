import { Text } from '@chakra-ui/react';
import React from 'react';

export interface HomePropsI {}

const Home: React.FC<HomePropsI> = (props: HomePropsI) => {
    return (
        <>
            <Text>Home</Text>
        </>
    );
};

export default Home;
