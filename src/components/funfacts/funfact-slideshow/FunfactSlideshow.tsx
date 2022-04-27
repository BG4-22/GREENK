import { Text } from '@chakra-ui/react';
import React from 'react';
import { hashCode } from '../../../utils/hashcode';
import Carousel from '../../carousel/Carousel';
import Card from '../funfact-card';
import './../Funfacts.css';

/**
 * Slideshow of funfacts inside the card component. Props is sent in the Home component and shown here.
 */

export interface FunfactSlideshowPropsI {
    funfacts: string[];
}

const FunfactSlideshow: React.FC<FunfactSlideshowPropsI> = ({ funfacts }) => {
    const elements = funfacts.map((el: string, i: number) => {
        return (
            <Text key={`${i}-${hashCode(el)}`} id={'textElement'}>
                {el}
            </Text>
        );
    });
    return (
        <Card title={'Visste du at?'}>
            <Carousel withAutomaticSliding navButtons={'small-buttons'}>
                {elements}
            </Carousel>
        </Card>
    );
};

export default FunfactSlideshow;
