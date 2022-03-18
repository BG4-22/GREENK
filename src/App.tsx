import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import { Home, Statistics } from './pages';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="statistikk" element={<Statistics />} />
                    <Route path="*" element={<h1>No match</h1>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
