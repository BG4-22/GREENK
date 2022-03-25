import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Statistics } from './pages';
import SolarPanelPage from './pages/solarpanel';

function App() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="statistikk" element={<Statistics />} />
                <Route path="solcelle" element={<SolarPanelPage />} />
                <Route path="*" element={<h1>No match</h1>} />
            </Route>
        </Routes>
    );
}

export default App;
