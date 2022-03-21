import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './pages/game/Game';
import GameButton from './component/GameButton';
import Layout from './layout';
import { Home, Statistics } from './pages';
import Highscores from './pages/highscores/Highscores';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="statistikk" element={<Statistics />} />
                    <Route path="game" element={<Game />} />
                    <Route path="highscore" element={<Highscores />} />
                    <Route path="*" element={<h1>No match</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
