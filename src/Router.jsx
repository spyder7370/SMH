import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './pages/navigation';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useColorScheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import GlobalLoading from './pages/globalLoading';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/notFound';
import Doctors from './pages/doctors/Doctors';
import DocktorsProfile from './pages/doctors/DoctorsProfile';
import Footer from './pages/footer/Footer';

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
				<ToastContainer
					position="bottom-left"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme={theme}
				/>
				<Navigation>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/doctors" element={<Doctors />} />
						<Route path="/doctor/profile/:id" element={<DocktorsProfile />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</Navigation>
			</>
		)
	);
};

export default Router;
