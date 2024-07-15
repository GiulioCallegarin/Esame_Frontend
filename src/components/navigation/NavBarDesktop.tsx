import { Box, Paper, Tab, Tabs } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../routes/Routes.ts';
import ThemeModeSwitch from '../theme/ThemeModeSwitch';

export default function NavBarDesktop(props: { themeMode: 'dark' | 'light', setThemeMode: (mode: 'dark' | 'light') => void }) {
    const {
        themeMode,
        setThemeMode,
    } = props;

    const navigate = useNavigate()
    const page = useLocation().pathname;

    const pageValue = page === routes.home
        || page === routes.appointments ? page : false;

    const handleTabChange = (_event: any, newValue: any) => {
        navigate(newValue);
    };

    return (
        <Paper
            elevation={1}
            sx={{
                height: 60,
                display: 'flex',
                alignItems: 'center',
                pl: 3,
                pr: 3,
            }}
        >
            <Box
                flexGrow={1}
                height='100%'
                display='flex'
                alignItems='center'
            >
                <Tabs value={pageValue} onChange={handleTabChange}>
                    <Tab value={routes.home} label='Home' />
                    <Tab value={routes.appointments} label='Appointments' />
                </Tabs>
            </Box>
            <ThemeModeSwitch themeMode={themeMode} setThemeMode={setThemeMode} />
        </Paper>
    );
}
