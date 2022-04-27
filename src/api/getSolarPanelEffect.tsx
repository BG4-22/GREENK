import { useEffect, useState } from 'react';

/**
 * Function to randomly change the kW the solar panels produce every 2 seconds.
 * Used to mock positive and negative changes in the value.
 * @returns number
 */

const getSolarPanelEffect = () => {
    const [effect, setEffect] = useState(0);

    const updateEffect = () => {
        setEffect(effect + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            updateEffect();
        }, 2000);
        return () => clearInterval(interval);
    }, [effect]);

    return Math.round(Math.sin(effect) * 5 + 10);
};
export default getSolarPanelEffect;
