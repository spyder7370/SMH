import { Container, Grid2 as Grid, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Email, FmdGood, LocalPhone, QueryBuilder } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { DARK_BACKGROUND, LIGHT_BACKGROUND } from '../../constants/constants';

const Footer = () => {
	const enableFooterBg = useSelector((state) => state?.global?.enableFooterBg);
	const theme = useSelector((state) => state?.global?.theme);
	const backgroundColor =
		theme === 'light' ? LIGHT_BACKGROUND : DARK_BACKGROUND;

	return (
		<div style={enableFooterBg ? { backgroundColor } : null}>
			<Container maxWidth="md" className={styles.FooterContainer}>
				<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
						<Typography
							variant="h6"
							color="primary"
							className={styles.FooterCategoryHeader}
						>
							Sharda Hospital
						</Typography>
						<Typography variant="subtitle2">
							Our family-centered approach to healthcare ensures that each
							member of your family receives personalized attention.
						</Typography>
					</Grid>
					<Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
						<Typography
							variant="h6"
							color="primary"
							className={styles.FooterCategoryHeader}
						>
							Quick links
						</Typography>
						<Link className={styles.FooterItemLink} to="/reset">
							<Typography>Home</Typography>
						</Link>
						<Link className={styles.FooterItemLink} to="/reset">
							<Typography>Book appointments</Typography>
						</Link>
						<Link className={styles.FooterItemLink} to="/reset">
							<Typography>Order medicine</Typography>
						</Link>
						<Link className={styles.FooterItemLink} to="/reset">
							<Typography>Doctors</Typography>
						</Link>
						<Link className={styles.FooterItemLink} to="/reset">
							<Typography>Staff</Typography>
						</Link>
					</Grid>
					<Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
						<Typography
							variant="h6"
							color="primary"
							className={styles.FooterCategoryHeader}
						>
							Contact details
						</Typography>
						<Typography className={styles.FooterItemIconGroup}>
							<FmdGood className={styles.FooterItemIcon} />{' '}
							<span>Tiwaripur, Azamgarh, UP</span>
						</Typography>
						<Typography className={styles.FooterItemIconGroup}>
							<LocalPhone className={styles.FooterItemIcon} /> +91-8423601531
						</Typography>
						<Typography className={styles.FooterItemIconGroup}>
							<Email className={styles.FooterItemIcon} />{' '}
							<a href="mailto:shardamultispecialityhospitals@gmail.com">
								Email
							</a>
						</Typography>
						<Typography className={styles.FooterItemIconGroup}>
							<QueryBuilder className={styles.FooterItemIcon} /> 8 AM - 5 PM ,
							Mon - Sat
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;
