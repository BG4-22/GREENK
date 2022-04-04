import React, { useEffect, useState } from 'react';

const getSolarPanelEffect = () => {
    const [effect, setEffect] = useState(145);

    const updateEffect = () => {
        let plusOrMinus = Math.random() < 0.5;
        let difference = (Math.random() + 1) * 3;
        let value = plusOrMinus ? effect + difference : effect - difference;

        setEffect(Math.round(value));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateEffect();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return effect;
};
export default getSolarPanelEffect;
