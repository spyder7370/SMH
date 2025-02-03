import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
	loading: false,
	enableFooterBg: null,
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload;
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
