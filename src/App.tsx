import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/carousel/Carousel';
import DiagramMoney from './components/DiagramMoney';
import Diagram from './components/statistics/Diagram';
import EnergySources from './components/statistics/EnergySources';
import HeatPump from './components/statistics/HeatPump';
import OverallCon from './components/statistics/OverallCon';
import SolarPanel from './components/statistics/SolarPanel';

import { Layout } from './layout';
import { Home } from './pages';
import EnergyFlow from './pages/energyflow/EnergyFlow';
import Game from './pages/game/Game';
import Highscores from './pages/highscores/Highscores';
import SolarPanelPage from './pages/solarpanel';

function App() {
    //Set the components that will be shown on the Statistics site
    const statComponents = [
        <OverallCon />,
        <HeatPump />,
        <SolarPanel />,
        <EnergySources />,
        <DiagramMoney />,
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="statistikk"
                    element={
                        <Carousel withButtons={true}>{statComponents}</Carousel>
                    }
                />
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
