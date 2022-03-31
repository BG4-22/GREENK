import { Route, Routes } from 'react-router-dom';
import './App.css';
import Diagram from './components/Diagram';
import DiagramC from './components/DiagramC';
import Layout from './layout';
import { Home, Statistics } from './pages';

function App() {
    const statComponents = [<Diagram />, <DiagramC />, <h1>HALLO</h1>];
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
