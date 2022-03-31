import { Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
//import Diagram from '../../components/Diagram';
//import DiagramMoney from '../../components/DiagramMoney';
import { motion, AnimatePresence } from 'framer-motion';
import './stats.css';
import { wrap } from 'popmotion';

export interface StatisticsPropsI {
    children: JSX.Element[];
}

const Statistics: React.FC<StatisticsPropsI> = ({ children }) => {
    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            };
        },
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const [[page, direction], setPage] = useState([0, 0]);

    const componentIndex = wrap(0, children.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    console.log(page, componentIndex);

    return (
        <>
            {/*<Text style={{ fontSize: 40 }}>Strømforbruket på skolen</Text>*/}
            <AnimatePresence initial={false} custom={direction}>
                {/* <div className="statsWrapper"> */}
                <motion.div
                    style={{
                        position: 'absolute',
                        height: '100%',
                        minHeight: '100vh',
                        width: '100%',
                    }}
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}>
                    {children[componentIndex]}
                </motion.div>
                {/* </div> */}
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {'‣'}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {'‣'}
            </div>
        </>
    );
};

export default Statistics;

//OBS OBS,Kokt mye fra: https://codesandbox.io/embed/framer-motion-image-gallery-pqvx3?codemirror=1
