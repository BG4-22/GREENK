import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#C3E0B5',
            },
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

