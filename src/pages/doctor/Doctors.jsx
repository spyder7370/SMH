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
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import styles from './Doctor.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	disablefooterBg,
	enablefooterBg,
} from '../../store/reducers/GlobalReducer';
import Doctor1Image from '../../assets/doctor-1.png';
import Doctor2Image from '../../assets/doctor-2.png';
import DoctorImage from '../../assets/doctor_images.png';

function Doctors() {
	const navigate = useNavigate();
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
				heading="Our doctors"
				breadcrumbLinks={[{ to: '/', title: 'Home' }, { title: 'Doctor' }]}
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
									image={
										index === 0
											? Doctor1Image
											: index === 1
												? Doctor2Image
												: DoctorImage
									}
								/>
								<CardContent>
									<Typography color="primary" variant="subtitle2">
										Cardiologist
									</Typography>
									<Typography variant="h5" component="div">
										Jagendra Purohit
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										variant="outlined"
										onClick={() => navigate(`/book`)}
										fullWidth
									>
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
}

export default Doctors;
