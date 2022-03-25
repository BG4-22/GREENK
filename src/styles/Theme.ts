import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            50: '#44337A',
            100: '#B794F4',
            500: '#B794F4', // you need this
        },
    },
});

export default theme;
