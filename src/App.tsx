import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from 'components/carousel/Carousel';
import EnergySources from 'components/statistics/EnergySources';
import HeatPump from 'components/statistics/HeatPump';
import OverallCon from 'components/statistics/OverallCon';
import SolarPanel from 'components/statistics/SolarPanel';

import { Layout } from 'layout';
import { Home } from 'pages';
import EnergyFlow from 'pages/EnergyFlow';
import Game from 'pages/Game';
import Highscores from 'pages/Highscores';
import Statistics from 'pages/Statistics';

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
