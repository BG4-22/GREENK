import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brand: {
            50: '#44337A',
            100: '#B794F4',
            500: '#B794F4', // you need this
        },
    },
    fonts: {
        heading: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
        body: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
    },
    components: {
        Heading: {
            baseStyle: {
                fontWeight: 300,
                textAlign: 'center',
            },
        },
        Button: {
            baseStyle: {
                borderRadius: '50px',
                color: 'white',
            },
            variants: {
                game: {
                    bgColor: '#FFDD85',
                    borderBottom: '3px solid grey',
                    height: '50px',
                },
                //extends the default variant, that is 'solid'
                gameAnswer: (props: any) => ({
                    ...theme.components.Button.variants.solid(props),
                    shadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    width: '30%',
                }),
                gameNavigation: {
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    background: '#f6dc97',
                    fontSize: '25px',
                },
            },
        },
    },
});

export default theme;
