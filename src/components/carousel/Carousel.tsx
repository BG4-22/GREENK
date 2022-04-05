import { Box, HStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { FC, useState } from 'react';

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
// inspired by: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?file=/src/Example.tsx:1598-2616

export interface CarouselPropsI {
    children: JSX.Element[];
    withButtons?: boolean;
}

const Carousel: FC<CarouselPropsI> = ({ children, withButtons = false }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    const index = wrap(0, children.length, page);
    return (
        <HStack
            // className={'statsWrapper'}
            margin={'auto'}
            position={'relative'}
            h={'100%'}
            w={'100%'}
            minH={'100px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexGrow={1}>
            {withButtons && (
                <Box className="prev" onClick={() => paginate(-1)}>
                    {'‣'}
                </Box>
            )}
            <Box
                textAlign={'left'}
                width={'90%'}
                margin={'auto'}
                fontSize={'1.5rem'}
                visibility={'hidden'}>
                {children[index]}
            </Box>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '0px',
                        height: '90%',
                        width: '90%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                        margin: '4rem 0 0 0',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    {children[index]}
                </motion.div>
            </AnimatePresence>
            {withButtons && (
                <Box className="next" onClick={() => paginate(1)}>
                    {'‣'}
                </Box>
            )}
        </HStack>
    );
};

export default Carousel;
