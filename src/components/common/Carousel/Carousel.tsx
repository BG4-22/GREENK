import { Box, HStack } from '@chakra-ui/react';
import { AnimatePresence, motion, MotionStyle, PanInfo } from 'framer-motion';
import { wrap } from 'popmotion';
import { FC, useEffect, useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import './Carousel.css';

// variants for animating entering and exiting of the containers of the slideshow
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

// prop type for specifying the navigation buttons for the carousel
type ButtonType = 'small-buttons' | 'default' | undefined;

// styling for each container of the carousel containers
const carouselContainerStyle: MotionStyle = {
    top: '0px',
    height: '90%',
    width: '90%',
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '40px',
    justifyContent: 'center',
    alignItems: 'center',
};

export interface CarouselPropsI {
    // content of the carousel
    children: JSX.Element[];

    // type of buttons for carousel navigation
    navButtons?: ButtonType;

    // the carousel slides to the next slide every 10 seconds if true
    withAutomaticSliding?: boolean;
}

const Carousel: FC<CarouselPropsI> = ({
    children,
    navButtons,
    withAutomaticSliding = false,
}) => {
    // the carousel's state: page and direction, as well as a setter for the page
    // direction=-1: move to the previous page
    // direction=0: stay on the current page
    // direction=-1: move to the next page
    const [[page, direction], setPage] = useState([0, 0]);
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    // transform the page number to a valid index
    const index = wrap(0, children.length, page);

    // don't show any buttons if navButtons is undefined
    const withButtons = navButtons != undefined;

    // slide to the next page every 10 seconds if the withAutomaticSliding prop is true
    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;
        if (withAutomaticSliding) {
            timeout = setTimeout(() => {
                paginate(1);
            }, 10000);
        }
        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [withAutomaticSliding, page, paginate]);

    // parameters for the animation transition
    const transition = {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
    };

    // show last page if the horizontal swipe power was negatibe
    // show the next page if the horizontal swipe power was positive
    // do nothing if the absolute value of the swipe power is less than the threshold
    const onDragEnd: (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => void = (_e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    return (
        <HStack
            margin={'auto'}
            position={'relative'}
            h={'100%'}
            w={'100%'}
            minH={'100px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexGrow={1}>
            {withButtons && (
                <Box className={`prev ${navButtons}`}>
                    <IoMdArrowDropleft onClick={() => paginate(-1)} />
                </Box>
            )}
            <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
                <motion.div
                    style={carouselContainerStyle}
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial={'enter'}
                    animate={'center'}
                    exit={'exit'}
                    transition={transition}
                    drag={'x'}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={onDragEnd}>
                    {children[index]}
                </motion.div>
            </AnimatePresence>
            {withButtons && (
                <Box className={`next ${navButtons}`}>
                    <IoMdArrowDropright onClick={() => paginate(1)} />
                </Box>
            )}
        </HStack>
    );
};

export default Carousel;
