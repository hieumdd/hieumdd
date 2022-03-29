import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
    styles: {
        global: {
            '*:not(svg)': {
                color: 'gray.800',
                borderStyle: 'solid',
                borderRadius: 'md',
            },
            body: {
                backgroundColor: 'gray.50',
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
                    borderColor: 'purple.400',
                },
                _groupHover: {
                    color: 'purple.400',
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
