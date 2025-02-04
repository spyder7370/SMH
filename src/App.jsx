import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './translations/i18n';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme({
	colorSchemes: {
		dark: true,
	},
	typography: {
		fontFamily: "'Montserrat', sans-serif",
	},
});

const App = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</Provider>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default App;
