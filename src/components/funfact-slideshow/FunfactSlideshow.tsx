import { Box, Text } from '@chakra-ui/react';
import React, {
    FC,
    ReactChild,
    ReactFragment,
    ReactNode,
    ReactPortal,
    useReducer,
} from 'react';
import { useSwipeable } from 'react-swipeable';
import {
    SwipeableHandlers,
    SwipeableProps,
    SwipeEventData,
} from 'react-swipeable/dist/types';
import FunfactCard from '../funfact-card';

interface SwipeablePropsI {
    children?: React.ReactElement;
    options: SwipeableProps;
    style?: React.CSSProperties;
}

// https://github.com/FormidableLabs/react-swipeable/blob/main/migration.md#swipeable-component-examples
const Swipeable = ({ children, options, style }: SwipeablePropsI) => {
    const handlers: SwipeableHandlers = useSwipeable(options);
    return (
        <div {...handlers} style={style}>
            {children}
        </div>
    );
};

const funfacts: string[] = [
    'Med 100 kW kan du lade en Tesla Model S',
    'blah blah blahblah blah blah',
    'skrt skrt skrt skrt skrt skrt skrt skrt skrt',
];

const swipeConfig = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
};

const FunfactSlideshow: React.FC = () => {
    // pos;
    // sliding;
    // dir;
    // children;
    return (
        <FunfactCard title={'Viste du at?'}>
            <Carousel>
                {React.Children.map(funfacts, (el, i) => (
                    <Text>{el}</Text>
                ))}
            </Carousel>
        </FunfactCard>
    );
};
export default FunfactSlideshow;

// -------------------------------------------------------

export const NEXT = 'NEXT';
export const PREV = 'PREV';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
    pos: number;
    sliding: boolean;
    dir: Direction;
    children?: ReactNode;
}

type CarouselAction =
    | { type: Direction; numItems: number }
    | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({
    pos: numItems - 1,
    sliding: false,
    dir: NEXT,
});

type SKRT = ReactChild | ReactFragment | ReactPortal;

const Carousel: FC = (props) => {
    const numItems = React.Children.count(props.children || 0);
    const [state, dispatch] = useReducer(reducer, getInitialState(numItems));
    const ANIMATION_DURATION_SEC = 1;

    const slide = (dir: Direction) => {
        dispatch({ type: dir, numItems });
        setTimeout(() => {
            dispatch({ type: 'stopSliding' });
        }, 1000 * ANIMATION_DURATION_SEC);
    };

    const handlers = {
        ...swipeConfig,
        onSwipedLeft: (_eventData: SwipeEventData) => slide(PREV),
        onSwipedRight: (_eventData: SwipeEventData) => slide(NEXT),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    };
    console.log((!state.sliding ? 1 : 0) + (state.dir ? 2 : 0));
    return (
        <Swipeable
            options={handlers}
            style={{
                // overflow: 'hidden',
                width: '100%',
            }}>
            <Box
                display={'flex'}
                w={`100%`}
                transition={
                    state.sliding
                        ? `transform ${ANIMATION_DURATION_SEC}s ease-in-out`
                        : 'none'
                }
                transform={
                    !state.sliding
                        ? 'translateX(5%)'
                        : state.dir === NEXT
                        ? 'translateX(calc(100%))'
                        : 'translateX(-100%)'
                }>
                {/* !state.sliding
                     ? 'translateX(5%)'
                     : state.dir === NEXT
                     ? 'translateX(calc(2 * (-100% - 20px)))'
                     : 'translateX(100%)' */}
                {React.Children.map(props.children, (child, index) => {
                    return (
                        <Box
                            minH={100}
                            flex={'1 0 100%'}
                            flexBasis={'flex-basis: 80%'}
                            margin={'auto'}
                            order={getOrder(index, state.pos, numItems)}>
                            {child}
                        </Box>
                    );
                })}
            </Box>
        </Swipeable>
    );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
    switch (action.type) {
        case PREV:
            return {
                ...state,
                dir: PREV,
                sliding: true,
                pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1,
            };
        case NEXT:
            return {
                ...state,
                dir: NEXT,
                sliding: true,
                pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1,
            };
        case 'stopSliding':
            return { ...state, sliding: false };
        default:
            return state;
    }
}
