import { Button, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';
import GameButton from './component/GameButton';
import Game from './component/Game';

export default function App() {
    return (
        <>
            <Game></Game>
        </>
    );
}
