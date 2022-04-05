import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter(props: {
    to: number;
    from: number;
    hasAnswered: boolean;
    next: boolean;
    setNext: any;
}) {
    const nodeContainer = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        if (props.to != 0 && props.hasAnswered) {
            const node = nodeContainer.current;
            const controls = animate(props.from, [props.from, props.to, props.to], {
                duration: 2,
                ease: 'easeOut',
                onComplete: () => {
                    props.setNext(true);
                },
                onUpdate(value) {
                    if (node) {
                        node.textContent = value.toFixed(0);
                    }
                },
            });
            return () => controls.stop();
        }
    }, [props.to]);

    return <p style={{ display: 'inline-block' }} ref={nodeContainer} />;
}

export default Counter;
