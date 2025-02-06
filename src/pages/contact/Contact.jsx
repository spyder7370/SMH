import { useEffect, useState } from 'react';
import Banner from '../../components/banner/Banner';
import ContactForm from './ContactForm';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/reducers/GlobalReducer';
import Aos from 'aos';

const Contact = () => {
	const dispatch = useDispatch();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		dispatch(setLoading(!loaded));
	}, [loaded, dispatch]);

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<Banner
				heading="Contact Us"
				breadcrumbLinks={[{ to: '/', title: 'Home' }, { title: 'Contact Us' }]}
			/>
			<div style={{ height: '25rem', width: '100%' }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.5951950531557!2d83.19709069999999!3d26.046797899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bd7e50598b03%3A0x4ddd1bc4deb61746!2sSharada%20Multispeciality%20Hospital%20%26%20Trauma%20Center(%20Dr%20Vinod%20Kumar%20Verma)!5e0!3m2!1sen!2sin!4v1738670152608!5m2!1sen!2sin"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="map"
					onLoad={() => setLoaded(true)}
				></iframe>
			</div>
			<ContactForm />
		</>
	);
};

export default Contact;
