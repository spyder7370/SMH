import {
	Card,
	CardContent,
	CardMedia,
	Grid2 as Grid,
	Typography,
	CardActions,
	Button,
	Container,
} from '@mui/material';
import Banner from '../../components/banner/Banner';
import styles from '../doctor/Doctor.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	disablefooterBg,
	enablefooterBg,
} from '../../store/reducers/GlobalReducer';

const Staff = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	});

	return (
		<>
			<Banner
				heading="Our Staff"
				breadcrumbLinks={[{ to: '/', title: 'Home' }, { title: 'Staff' }]}
			/>
			<Container maxWidth="md" className={styles.Container}>
				<Grid container spacing={4}>
					{Array.from(Array(6)).map((_, index) => (
						<Grid
							key={`${(index + 1)?.toString()}`}
							size={{ xs: 12, sm: 6, md: 4 }}
						>
							<Card sx={{ overflow: 'hidden' }} elevation={0}>
								<CardMedia
									className={styles.Image}
									sx={{
										height: 200,
										backgroundPosition: 'top',
										borderRadius: '5%',
									}}
									image="../src/assets/doctor_images.jpg"
								/>
								<CardContent>
									<Typography color="primary" variant="subtitle2">
										Radiologist
									</Typography>
									<Typography variant="h5" component="div">
										Jagendra Purohit
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" variant="outlined" fullWidth>
										Make appointment
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
export default Staff;
