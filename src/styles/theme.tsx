import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    },
    cssVariables: {
        colorSchemeSelector: '.mode-%s',
    },
    palette: {
        primary: indigo,
        text: {},
        background: {}, action: {},
    },
    colorSchemes: {
        dark: true
    }
});

export default theme;
