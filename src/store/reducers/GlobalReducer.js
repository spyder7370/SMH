import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
	loading: false,
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
	},
});

export const { setTheme, setLoading } = globalSlice.actions;

export default globalSlice.reducer;
