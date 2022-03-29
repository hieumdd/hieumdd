import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    styles: {
        global: {
            '*:not(svg)': {
                borderStyle: 'solid',
                borderRadius: 'lg',
            },
            '.shadow': {
                boxShadow: 'base',
            },
            '.hover-shadow': {
                _hover: {
                    boxShadow: 'lg',
                },
            },
        },
    },
    components: {
        Container: {
            baseStyle: {
                maxW: 'container.lg',
            },
        },
        Link: {
            baseStyle: {
                textDecor: 'underline',
            },
        },
    },
});
