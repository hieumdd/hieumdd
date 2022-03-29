import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    styles: {
        global: {
            '*:not(svg)': {
                borderStyle: 'solid',
                borderRadius: 'md',
            },
            '.shadow': {
                boxShadow: 'base',
            },
            '.hover-shadow': {
                _hover: {
                    boxShadow: 'lg',
                },
            },
            '.hover-color': {
                _hover: {
                    borderColor: 'purple.500',
                },
                _groupHover: {
                    color: 'purple.500',
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
        // Link: {
        //     baseStyle: {
        //         textDecor: 'underline',
        //     },
        // },
    },
});
