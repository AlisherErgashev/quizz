import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import theme from './styles/theme.tsx';
import { AppLayout } from './layout/layout.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppLayout>
                <App/>
            </AppLayout>
        </ThemeProvider>
    </StrictMode>,
)
