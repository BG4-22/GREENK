import { Route, Routes } from 'react-router-dom';
import './App.css';
import SolarPanelComponent from './components/solar-panel-component';
import { Home, Statistics } from './pages';

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="statistikk" element={<Statistics />} />
                <Route path="solcelle" element={<SolarPanelComponent />} />
                <Route path="*" element={<h1>No match</h1>} />
            </Route>
        </Routes>
    );
}

export default App;
