import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import EnergyFlow from './pages/EnergyFlow';
import Game from './pages/Game';
import Home from './pages/Home';
import Statistics from './pages/Statistics';

/**
 * Main react component. Here the routes are made to map each url path and the components that is shown on each of those.
 */

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="statistikk" element={<Statistics />} />
                <Route path="spill" element={<Game />} />
                <Route path="energiflyt" element={<EnergyFlow />} />
                <Route path="*" element={<Navigate replace to={'/'} />} />
            </Route>
        </Routes>
    );
}

export default App;
