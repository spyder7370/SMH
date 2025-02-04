import { createSlice } from '@reduxjs/toolkit';
import {
	DARK_BACKGROUND,
	DARK_BACKGROUND_GRADIENT,
	LIGHT_BACKGROUND,
	LIGHT_BACKGROUND_GRADIENT,
} from '../../constants/constants';

const initialState = {
	theme: 'light',
	loading: false,
	enableFooterBg: null,
	themeGradient: LIGHT_BACKGROUND_GRADIENT,
	themeBackground: LIGHT_BACKGROUND,
	inverseThemeBackground: DARK_BACKGROUND,
	textColor: 'black',
	inverseTextColor: 'white',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			const theme = action.payload;
			state.theme = theme;
			state.themeGradient =
				theme === 'light'
					? LIGHT_BACKGROUND_GRADIENT
					: DARK_BACKGROUND_GRADIENT;
			state.themeBackground =
				theme === 'light' ? LIGHT_BACKGROUND : DARK_BACKGROUND;
			state.inverseThemeBackground =
				theme === 'light' ? DARK_BACKGROUND : LIGHT_BACKGROUND;
			state.textColor = theme === 'light' ? 'black' : 'white';
			state.inverseTextColor = theme === 'light' ? 'white' : 'black';
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		enablefooterBg: (state, _action) => {
			state.enableFooterBg = true;
		},
		disablefooterBg: (state, _action) => {
			state.enableFooterBg = false;
		},
	},
});

export const { setTheme, setLoading, enablefooterBg, disablefooterBg } =
	globalSlice.actions;

export default globalSlice.reducer;
