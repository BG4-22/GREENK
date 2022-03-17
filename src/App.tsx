import { Button, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

const people = [
    'Per Reimers',
    'Per Pils',
    'Perrrrnille Reimers',
    'Perrr',
    'Xx_lil_gamer_xX',
    'Nora Berdal',
    'Åse Elise Tveit',
    'Pål Grunnar Fjell',
    'Grønn Skaug',
    'Askeladden',
];

// 						                <motion.circle
//     className="w-12 h-12 bg-slate-500 relative"
//     initial={{ left: '0%', top: '0%' }}
//     animate={{ left: '10%', top: '10%' }}
//     exit={{ left: '0%', top: '0%' }}
// />

const MyComponent = ({ isVisible }: { isVisible: boolean }) => {
    const transition = { duration: 5, ease: 'easeInOut' };
    const [cx, cy] = [50, 200];
    const r = 200;
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="item">
            <AnimatePresence>
                {/* {isVisible && ( */}
                <motion.path d={' '} />

                <motion.circle
                    style={{
                        filter: 'drop-shadow( 0rem 0rem 50rem #FFFEDB',
                        // offsetPath:
                        //     'path("M200,0 A200,200 0 1,1 200,400 A200,200 0 1,1 200,0")',
                    }}
                    r={10}
                    cx={50}
                    cy={50}
                    pathLength={100}
                    animate={
                        {
                            // cx: [null, 50],
                            // cy: [null, 50],
                        }
                    }
                    // initial={{ cx: -50, cy: 50 }}
                    // exit={{ cx: 150, cy: 50 }}
                    transition={transition}
                    fill={'#FFFEDB'}
                    stroke="#FFF6A0"
                    stroke-width="20"
                    // variants={}
                >
                    <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        // M (CX - R), CY
                        // a R,R 0 1,0 (R * 2),0
                        // a R,R 0 1,0 -(R * 2),0
                        // CX= 50
                        // CY= 50
                        // R= 20
                        path={`M ${cx - r}, ${cy} a 20,20 0 1,0 ${
                            2 * r
                        },0 a 20,20 0 1,0 -${2 * r},0
						`}
                    />
                </motion.circle>
                {/* )} */}
            </AnimatePresence>
        </motion.svg>
    );
};

export default function App() {
    const [t, setT] = useState(false);
    return (
        <div className="w-48 h-48 bg-green-300">
            {/* <Ball /> */}
            <MyComponent isVisible={t} />

            <Stack spacing={4} direction="row" align="center">
                <Button onClick={() => setT(!t)} colorScheme="teal" size="md">
                    Button
                </Button>
                <Button colorScheme="teal" size="md">
                    Button
                </Button>
                <Button colorScheme="teal" size="md">
                    Button
                </Button>
            </Stack>
        </div>
    );

    // return (
    //     <>
    //         <FunfactCard title={'HÆLLÆ'} list={people} ordered={false} />
    //         <SolarPanelComponent />
    //     </>
    // );
}
