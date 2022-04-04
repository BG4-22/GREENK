import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home, Statistics } from './pages';
import Game from './pages/game/Game';
import Highscores from './pages/highscores/Highscores';
import SolarPanelPage from './pages/solarpanel';
import EnergyFlow from './pages/energyflow/EnergyFlow';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="statistikk" element={<Statistics />} />
                <Route path="solcelle" element={<SolarPanelPage />} />
                <Route path="game" element={<Game />} />
                <Route path="highscore" element={<Highscores />} />
                <Route path="energiflyt" element={<EnergyFlow />} />
                <Route path="*" element={<h1>No match</h1>} />
            </Route>
        </Routes>
    );
}

export default App;
