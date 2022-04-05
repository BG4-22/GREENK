import { Text } from '@chakra-ui/react';
import React from 'react';
import Carousel from '../carousel/Carousel';
import FunfactCard from '../funfact-card';
export interface FunfactSlideshowPropsI {
    funfacts: string[];
}

const FunfactSlideshow: React.FC<FunfactSlideshowPropsI> = ({ funfacts }) => {
    const elements = funfacts.map((el: string, i: number) => {
        return (
            <Text
                textAlign={'left'}
                width={'90%'}
                margin={'auto'}
                fontSize={'1.5rem'}>
                {el}
            </Text>
        );
    });
    return (
        <FunfactCard title={'Viste du at?'}>
            <Carousel>{elements}</Carousel>
        </FunfactCard>
    );
};

export default FunfactSlideshow;
