import { Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../../carousel/Carousel';
import FunfactCard from '../funfact-card';
import './../Funfacts.css';
export interface FunfactSlideshowPropsI {
    funfacts: string[];
}

const FunfactSlideshow: React.FC<FunfactSlideshowPropsI> = ({ funfacts }) => {
    const elements = funfacts.map((el: string, i: number) => {
        return <Text id={'textElement'}>{el}</Text>;
    });
    return (
        <FunfactCard title={'Visste du at?'}>
            <Carousel withAutomaticSliding navButtons={'small-buttons'}>
                {elements}
            </Carousel>
        </FunfactCard>
    );
};

export default FunfactSlideshow;
