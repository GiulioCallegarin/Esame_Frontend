import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes.ts';
import NotFoundPage from '../pages/NotFoundPage.tsx';
import PageLayout from '../pages/PageLayout.tsx';
import HomePage from '../pages/HomePage.tsx';
import AppointmentsPage from '../pages/AppointmentsPage.tsx';

export default function AppRouter(props: { themeMode: 'dark' | 'light', setThemeMode: (mode: 'dark' | 'light') => void }) {
    const {
        themeMode,
        setThemeMode,
    } = props;

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<PageLayout themeMode={themeMode} setThemeMode={setThemeMode} />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.appointments} element={<AppointmentsPage />} />
                </Route>
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
