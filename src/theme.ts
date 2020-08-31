import {red, orange, green} from "@material-ui/core/colors";
import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({

    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
    },

    palette: {
        primary: {
            main: red.A200,
        },
        secondary: {
            main: orange.A200,
        },
        error: {
            main: green.A200,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;