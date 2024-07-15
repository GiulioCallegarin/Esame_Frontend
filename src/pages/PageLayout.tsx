import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBarDesktop from '../components/navigation/NavBarDesktop';

export default function PageLayout(props: { themeMode: 'dark' | 'light', setThemeMode: (mode: 'dark' | 'light') => void }) {
    const {
        themeMode,
        setThemeMode,
    } = props;

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                zIndex: 10000,
            }}
        >
            <NavBarDesktop themeMode={themeMode} setThemeMode={setThemeMode} />
            <Outlet />
        </Container>
    );
}
