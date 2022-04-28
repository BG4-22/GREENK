import { useEffect, useState } from 'react';

/**
 * This method is meant to simulate real time data
 *
 * @returns number that will update every two seconds
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
