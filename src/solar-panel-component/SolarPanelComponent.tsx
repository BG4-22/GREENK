import { motion } from 'framer-motion';
import React, { useState } from 'react';
import cloud from '../assets/cloud.svg';
import sun from '../assets/sun.svg';

const SolarPanelComponent: React.FC = () => {
    const [s, sS] = useState(0);
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const show = [[0], [1], [0, 1]];
    const images = [
        { src: sun, style: {} },
        { src: cloud, style: { top: '50px', left: '40px' } },
    ];

    return (
        <div
            className={
                'w-96 h-96 flex flex-col justify-center align-middle bg-slate-400'
            }>
            <motion.div animate={{ scale: 0.5 }}>
                {show[s].map((img, i) => {
                    return (
                        <img
                            src={images[img].src}
                            className={'absolute'}
                            style={images[img].style}
                            key={i}
                            alt={'alt' + i}
                        />
                    );
                })}
            </motion.div>
            <div className="w-full h-full"></div>
            <div className="justify-center align-middle flex">
                <button className={'m-2 p-2'} onClick={() => sS(0)}>
                    1
                </button>
                <button className={'m-2 p-2'} onClick={() => sS(1)}>
                    2
                </button>
                <button className={'m-2 p-2'} onClick={() => sS(2)}>
                    3
                </button>
            </div>
        </div>
    );
};

export default SolarPanelComponent;
