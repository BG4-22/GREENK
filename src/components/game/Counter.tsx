import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterPropsI {
    to: number;
    from: number;
    hasAnswered: boolean;
    next: boolean;
    setNext: any;
}
/**
 * Function that returns a <p> component that animates a number from the props.from value to the props.to value.
 */
function Counter(props: CounterPropsI) {
    const nodeContainer = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        /**
         * Counter wont anumate until player has answered
         */
        if (props.to != 0 && props.hasAnswered) {
            const node = nodeContainer.current;
            /**
             * Animation logic
             */
            const controls = animate(
                props.from,
                [props.from, props.to, props.to],
                {
                    duration: 2,
                    ease: 'easeOut',
                    onComplete: () => {
                        /**
                         * On animation complete, update game state to next question.
                         */
                        props.setNext(true);
                    },
                    onUpdate(value) {
                        if (node) {
                            node.textContent = value.toFixed(0);
                        }
                    },
                }
            );
            return () => controls.stop();
        }
    }, [props.to]);

    return <span style={{ display: 'inline-block' }} ref={nodeContainer} />;
}

export default Counter;
