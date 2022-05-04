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
 * The soloution to a comparison in the game
 * Animates the way the soloution is displayed by quickly counting upwards until the soloution is reached
 * to add suspense
 */
const Counter: React.FC<CounterPropsI> = (props: CounterPropsI) => {
    const nodeContainer = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        /**
         * Counter wont animate until player has answered
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
};

export default Counter;
