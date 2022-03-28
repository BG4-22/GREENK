import { Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Diagram from '../../components/Diagram';
import DiagramC from '../../components/DiagramC';
//import { Slide } from 'react-slideshow-image';

export interface StatisticsPropsI {}

const Statistics: React.FC<StatisticsPropsI> = (props: StatisticsPropsI) => {
    const [component, setComponent] = useState('diagram');

    //const components = [<Diagram />, <DiagramC />];

    function setComponentIndex() {
        switch (component) {
            case 'start':
                return <Diagram />;
            case 'playing':
                return <DiagramC />;

            default:
                return null;
        }
    }

    /*function setComponentIndex() {
        let componentIndex = 0;
        getComponent(componentIndex);
        if(componentIndex > components.length){
            componentIndex = 0; 
        }
        componentIndex++; 
    }*/

    /*function getComponent(componentIndex: number) {
        return components[componentIndex];
    }*/

    useEffect(() => {
        setComponentIndex();
    });

    return (
        <>
            <button onClick={setComponentIndex}>NEXT</button>
            <Text>Statistikk</Text>
        </>
    );
};

export default Statistics;
