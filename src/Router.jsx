import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './pages/navigation';

import { useColorScheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import GlobalLoading from './pages/globalLoading';

const Router = () => {
	const { mode, setMode } = useColorScheme();
	const theme = useSelector((state) => state?.global?.theme);

	useEffect(() => {
		setMode(theme || 'light');
	}, [setMode, theme]);

	return (
		mode && (
			<>
				<GlobalLoading />
				<Navigation>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</Navigation>
			</>
		)
	);
};

export default Router;
