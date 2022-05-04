import { SystemStyleObject, Text } from '@chakra-ui/react';
import React from 'react';
import { hashCode } from '../../../utils/hashcode';
import Card from '../../common/Card';
import Carousel from '../../common/Carousel';

/**
 * Slideshow of funfacts inside the card component. Props is sent in the Home component and shown here.
 */
export interface FunfactSlideshowPropsI {
    funfacts: string[];
}

// styling for the text of the funfacts
const textStyle: SystemStyleObject = {
    background: '#fff',
    textAlign: 'center',
    width: '90%',
    fontSize: '1.1rem',
};

// use the card and carouesl components to show all the facts as a slideshow in a funfact card
const FunfactSlideshow: React.FC<FunfactSlideshowPropsI> = ({ funfacts }) => {
    const elements = funfacts.map((el: string, i: number) => {
        return (
            <Text key={`${i}-${hashCode(el)}`} sx={textStyle}>
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
