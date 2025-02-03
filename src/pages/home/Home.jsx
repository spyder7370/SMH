import { Container, Grid2 as Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import {
	DARK_BACKGROUND_GRADIENT,
	LIGHT_BACKGROUND_GRADIENT,
} from '../../constants/constants';
import HospitalImage from '../../assets/sharda-crop.png';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Home = () => {
	const { t } = useTranslation();
	const theme = useSelector((state) => state?.global?.theme);
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div
			style={{
				backgroundImage: `linear-gradient(${theme === 'light' ? LIGHT_BACKGROUND_GRADIENT : DARK_BACKGROUND_GRADIENT}), url('${HospitalImage}')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
			}}
		>
			<Container maxWidth="md" className={styles.HeroContainer}>
				<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid
						data-aos-duration="900"
						data-aos="fade-right"
						size={{ lg: 5, md: 7, sm: 12, xs: 12 }}
					>
						<Typography
							sx={{ typography: { xs: 'body1', sm: 'h6', md: 'h5' } }}
						>
							{t('welcome')}
						</Typography>
						<Typography
							color="primary"
							sx={{ typography: { xs: 'h4', sm: 'h4', md: 'h2' } }}
							className={styles.Heading}
						>
							Sharda Multi Speciality Hospital
						</Typography>
						<Typography variant="body1">
							Our is to deliver the highest quality healthcare services. We
							believe that everyone deserves access to excellent medical care
							without compromising on quality.
						</Typography>
					</Grid>
					<Grid
						data-aos-duration="900"
						data-aos="fade-left"
						size={{ lg: 7, md: 5, sm: 12, xs: 12 }}
					>
						<div className={styles.HeroImage}>
							<img
								className={styles.a}
								src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/hero-img-1.jpg"
								alt="head"
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
