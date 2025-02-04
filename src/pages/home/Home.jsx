import { useDispatch } from 'react-redux';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import {
	disablefooterBg,
	enablefooterBg,
} from '../../store/reducers/GlobalReducer';
import Hero from './Hero';
import ServicesCard from './ServicesCard';
import About from './About';
import AppointmentBanner from './AppointmentBanner';
import ContactForm from '../contact/ContactForm';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		Aos.init({ disable: 'mobile', startEvent: 'load' });
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	}, [dispatch]);

	return (
		<>
			<Hero />
			<ServicesCard />
			<About />
			<AppointmentBanner />
			<ContactForm />
		</>
	);
};

export default Home;
