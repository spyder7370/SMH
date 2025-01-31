import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pathname: '/home',
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setPathname: (state, action) => {
			state.pathname = action.payload;
		},
	},
});

export const { setPathname } = homeSlice.actions;

export default homeSlice.reducer;
