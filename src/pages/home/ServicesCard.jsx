import { CalendarMonth } from '@mui/icons-material';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid2 as Grid,
	Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import DoctorIcon from '../../assets/doctor.svg';
import DoctorWhiteIcon from '../../assets/doctor-white.svg';
import DoctorLaptopIcon from '../../assets/doctor-laptop.svg';
import DoctorLaptopWhiteIcon from '../../assets/doctor-laptop-white.svg';

const ServicesCard = () => {
	const theme = useSelector((state) => state?.global?.theme);
	const themeBackground = useSelector(
		(state) => state?.global?.themeBackground
	);
	const inverseThemeBackground = useSelector(
		(state) => state?.global?.inverseThemeBackground
	);
	const inverseTextColor = useSelector(
		(state) => state?.global?.inverseTextColor
	);

	return (
		<div>
			<Container maxWidth="md" className={styles.HeroContainer}>
				<Grid container spacing={0}>
					<Grid
						data-aos-duration="900"
						data-aos="fade-up"
						size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
						sx={{ display: 'flex' }}
					>
						<Card
							sx={{ backgroundColor: inverseThemeBackground }}
							className={styles.ServicesCard}
							elevation={0}
							variant="outlined"
						>
							<CardContent>
								<Typography
									color={inverseTextColor}
									variant="h5"
									component="div"
								>
									{`Don't `}
									<span className={styles['Font-Weight-Bold']}>
										Hesitate
									</span>{' '}
									To Contact us
								</Typography>
							</CardContent>
							<CardActions className={styles.AppointmentServiceCardActions}>
								<Link to="/book">
									<Button
										sx={{ color: inverseTextColor }}
										size="small"
										variant="text"
									>
										Make appointment{' '}
										<CalendarMonth
											className={styles.AppointmentServiceCardButton}
										/>
									</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
					<Grid
						data-aos-duration="900"
						data-aos="fade-up"
						size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
						sx={{ display: 'flex' }}
					>
						<Card
							sx={{ backgroundColor: themeBackground }}
							elevation={0}
							variant="outlined"
							className={styles.ServicesCard}
						>
							<CardContent>
								<img
									src={theme === 'light' ? DoctorIcon : DoctorWhiteIcon}
									alt="Doctor Icon"
								/>
								<Typography
									className={styles.ServicesCardHeading}
									variant="h5"
									component="div"
								>
									Prioritize Family Health
								</Typography>
								<Typography variant="body2" component="div">
									We understand the importance of family health overall
									well-being.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						data-aos-duration="900"
						data-aos="fade-up"
						size={{ lg: 4, md: 4, sm: 12, xs: 12 }}
						sx={{ display: 'flex' }}
					>
						<Card
							sx={{ backgroundColor: themeBackground }}
							elevation={0}
							variant="outlined"
							className={styles.ServicesCard}
						>
							<CardContent>
								<img
									src={
										theme === 'light' ? DoctorLaptopIcon : DoctorLaptopWhiteIcon
									}
									alt="Doctor Icon"
								/>
								<Typography
									className={styles.ServicesCardHeading}
									variant="h5"
									component="div"
								>
									24 hours service
								</Typography>
								<Typography variant="body2" component="div">
									We take pride in offering 24-hour medical services to ensure
									that you.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ServicesCard;
