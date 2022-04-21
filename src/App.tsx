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

function App() {
    //Set the components that will be shown on the Statistics site
    const statComponents = [
        <OverallCon />,
        <HeatPump />,
        <SolarPanel />,
        <EnergySources />,
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
                <Route path="spill" element={<Game />} />
                <Route path="highscore" element={<Highscores />} />
                <Route path="energiflyt" element={<EnergyFlow />} />
                <Route path="*" element={<Navigate replace to={'/'} />} />
            </Route>
        </Routes>
    );
}

export default App;
