import { Box, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import React, { FC, useState } from 'react';

import FunfactCard from 'components/funfacts/funfact-card';

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

export interface FunfactSlideshowPropsI {
    funfacts: string[];
}

const Carousel: FC<FunfactSlideshowPropsI> = (props) => {
    const { funfacts } = props;
    const [[page, direction], setPage] = useState([0, 0]);
    const funfactIndex = wrap(0, props.funfacts.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <Box
            h={'100%'}
            w={'100%'}
            minH={'100px'}
            position={'relative'}
            flexGrow={1}>
            <Box
                textAlign={'left'}
                width={'90%'}
                margin={'auto'}
                fontSize={'1.5rem'}
                visibility={'hidden'}>
                {funfacts[funfactIndex]}
            </Box>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        height: 'fit-content',
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
                    <Text
                        textAlign={'left'}
                        width={'90%'}
                        margin={'auto'}
                        fontSize={'1.5rem'}>
                        {funfacts[funfactIndex]}
                    </Text>
                </motion.div>
            </AnimatePresence>
        </Box>
    );
};

// inspired by: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?file=/src/Example.tsx:1598-2616

const FunfactSlideshow: FC<FunfactSlideshowPropsI> = (funfacts) => {
    return (
        <FunfactCard title={'Visste du at?'}>
            <Carousel {...funfacts} />
        </FunfactCard>
    );
};

export default FunfactSlideshow;
