import { Box } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Skrt(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (ref?.current?.rotation.x) {
            ref.current.rotation.x += 0.01;
        }
    });
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
}

const SolarPanelPage: FC<{}> = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    // document.body.appendChild(renderer.domElement);
    useEffect(() => {}, []);

    return (
        <Box
            // ref={ref}
            m={'5% auto auto auto'}
            w={'90%'}
            h={'90%'}
            pos={'relative'}
            border={'.1px solid green'}
            borderRadius={'40px'}
            bg={'rgba(255, 255, 255, .7)'}>
            {/* {null} */}
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Skrt position={[-1.2, 0, 0]} />
                <Skrt position={[1.2, 0, 0]} />
            </Canvas>
        </Box>
    );
};

export default SolarPanelPage;
