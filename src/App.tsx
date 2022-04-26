import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import EnergyFlow from './pages/EnergyFlow';
import Game from './pages/Game';
import Highscores from './pages/Highscores';
import Statistics from './pages/Statistics';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="statistikk" element={<Statistics />} />
                <Route path="spill" element={<Game />} />
                <Route path="highscore" element={<Highscores />} />
                <Route path="energiflyt" element={<EnergyFlow />} />
                <Route path="*" element={<Navigate replace to={'/'} />} />
            </Route>
        </Routes>
    );
}

export default App;
