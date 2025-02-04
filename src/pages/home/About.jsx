import { CheckCircleOutline } from '@mui/icons-material';
import { Container, Grid2 as Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import styles from './Home.module.scss';
import DotBackgroundWhite from '../../assets/dot-bg-white.png';
import DotBackgroundBlack from '../../assets/dot-bg-black.png';

const About = () => {
	const theme = useSelector((state) => state?.global?.theme);
	const dotBackground =
		theme === 'light' ? DotBackgroundBlack : DotBackgroundWhite;

	return (
		<div>
			<Container maxWidth="md" className={styles.HeroContainerNoTop}>
				<Grid container spacing={3}>
					<Grid
						data-aos-duration="900"
						data-aos="fade-right"
						size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
					>
						<div
							style={{ backgroundImage: `url('${dotBackground}')` }}
							className={styles.AboutBackground}
						>
							<img
								className={styles.AboutImage1}
								src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/about-img-1.jpg"
								alt="Doctor 1"
							/>
							<img
								className={styles.AboutImage2}
								src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/about-img-2.jpg"
								alt="Doctor 2"
							/>
						</div>
					</Grid>
					<Grid
						data-aos-duration="900"
						data-aos="fade-right"
						size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
					>
						<Typography
							sx={{ typography: { xs: 'h6', sm: 'h6', md: 'h5' } }}
							color="primary"
							className={styles.AboutSuperTitle}
						>
							About Sharda
						</Typography>
						<Typography
							sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h3' } }}
							className={styles.Heading}
						>
							Find Best Services & Poplular Treatment Here.
						</Typography>
						<Typography variant="body1">
							We take pride in offering a wide range of best-in-class medical
							services and popular treatments to cater to your diverse
							healthcare needs.
						</Typography>
						<Typography className={styles.AboutChecklist}>
							<CheckCircleOutline className={styles.AboutChecklistIcon} />{' '}
							Mental health Solutions
						</Typography>
						<Typography className={styles.AboutChecklist}>
							<CheckCircleOutline className={styles.AboutChecklistIcon} /> Rapid
							Patient Improvement
						</Typography>
						<Typography className={styles.AboutChecklist}>
							<CheckCircleOutline className={styles.AboutChecklistIcon} /> World
							Class Treatment
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default About;
