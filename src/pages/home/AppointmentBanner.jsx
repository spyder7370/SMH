import { CalendarMonth } from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import AppointmentsWhite from '../../assets/appointments-white.svg';
import AppointmentsBlack from '../../assets/appointments-black.svg';

const AppointmentBanner = () => {
	const theme = useSelector((state) => state?.global?.theme);

	const themeBackground = useSelector(
		(state) => state?.global?.themeBackground
	);
	return (
		<div style={{ backgroundColor: themeBackground }}>
			<Container maxWidth="md" className={styles.HeroContainerSmall}>
				<div className={styles.AppointmentBannerContainer}>
					<div className={styles.AppointmentBannerContent}>
						<div>
							<img
								src={theme === 'light' ? AppointmentsBlack : AppointmentsWhite}
								alt="Appointments"
							/>
						</div>
						<div>
							<Typography
								sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h4' } }}
								className={styles['Font-Family-Medium']}
							>
								Open For Appointments
							</Typography>
							<Typography
								sx={{ typography: { xs: 'body1', sm: 'body1', md: 'h6' } }}
							>
								We are delighted to announce that our doors are open, and we are
								now accepting appointments to serve you better.
							</Typography>
						</div>
					</div>
					<div data-aos-duration="900" data-aos="fade-left">
						<Link to="/book">
							<Button size="large" variant="contained">
								Make appointment{' '}
								<CalendarMonth className={styles.AppointmentBannerActionIcon} />
							</Button>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default AppointmentBanner;
