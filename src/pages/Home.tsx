import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return <h1>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 256,
                    height: 256,
                },
            }}
        >
            <Paper onClick={() => navigate('/quiz')} elevation={8} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}>Quiz</Paper>

            <Paper onClick={() => navigate('/about')} elevation={8} style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}>About</Paper>
        </Box>

    </h1>;
}
