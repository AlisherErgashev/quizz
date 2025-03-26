import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: '.mode-%s',
    },
    palette: {},
    colorSchemes: {
        dark: true
    }
});

export default theme;
