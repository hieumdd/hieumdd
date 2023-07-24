import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        nord: {
            50: "#FCFCFD",
            100: "#F5F7F9",
            200: "#EBEEF4",
            300: "#E2E6EE",
            400: "#D8DEE9",
            500: "#A7B4CD",
            600: "#798EB4",
            700: "#516790",
            800: "#35445F",
            900: "#1C2331",
            950: "#0D1017"
        }
    },
    components: {
        Container: {
            baseStyle: {
                maxW: 'container.md',
            },
        },
    },
});
