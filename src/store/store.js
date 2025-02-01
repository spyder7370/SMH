import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './reducers/HomeReducer';
import GlobalReducer from './reducers/GlobalReducer';

export const store = configureStore({
	reducer: {
		global: GlobalReducer,
		home: HomeReducer,
	},
});
