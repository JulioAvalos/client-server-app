import {
    Container,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from "./routes/Navigation";
import {AuthProvider} from "./context/AuthContext";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <AuthProvider>
                    <Navigation/>
                </AuthProvider>
            </Container>
        </ThemeProvider>
    );
}

export default App;
