import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        cerulean: {
            '50': '#ecfcff',
            '100': '#cff7fe',
            '200': '#a5effc',
            '300': '#67e4f9',
            '400': '#22d0ee',
            '500': '#06b6d4',
            '600': '#0899b2',
            '700': '#0e7d90',
            '800': '#156775',
            '900': '#165863',
            '950': '#083b44',
        },
    },
    components: {
        Container: {
            baseStyle: {
                maxW: 'container.md',
            },
        },
        Button: {
            defaultProps: {
                colorScheme: 'cerulean',
            },
        },
        CloseButton: {
            defaultProps: {
                colorScheme: 'cerulean',
            },
        },
        Tag: {
            defaultProps: {
                colorScheme: 'cerulean',
            },
        },
    },
});
