import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diagram from './components/Diagram';
import DiagramMoney from './components/DiagramMoney';
import SolarPanel from './components/SolarPanel';
import Layout from './layout';
import { Home, Statistics } from './pages';

function App() {
    //Set the components that will be shown on the Statistics site
    const statComponents = [<Diagram />, <DiagramMoney />, <SolarPanel />];
    const Stats = <Statistics>{statComponents}</Statistics>;
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="statistikk" element={Stats} />
                    <Route path="*" element={<h1>No match</h1>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
