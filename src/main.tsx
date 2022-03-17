import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const theme = extendTheme({
    colors: {
        brand: {
            50: '#44337A',
            100: '#B794F4',
            500: '#B794F4', // you need this
        },
    },
});

ReactDOM.render(
	<React.StrictMode>
        <BrowserRouter>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
