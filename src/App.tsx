import { useMemo, useState } from "react";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

function App() {
    const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');
    const theme = useMemo(() => createTheme({
        palette: {
            mode: themeMode,
        }
    }), [themeMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouter themeMode={themeMode} setThemeMode={setThemeMode} />
        </ThemeProvider>
    )
}

export default App
