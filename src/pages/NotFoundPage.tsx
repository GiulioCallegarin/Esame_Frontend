import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/Routes';

export default function NotFoundPage() {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: window.innerHeight * 0.9,
            }}
        >
            <Typography
                component='div'
                variant='h5'
            >
                Oops, la pagina non esiste.
            </Typography>
            <Button
                variant='outlined'
                onClick={() => navigate(routes.home)}
                sx={{ marginTop: 4 }}
            >
                Val alla pagina iniziale
            </Button>
        </Box>

    );
}
