import { useDispatch } from 'react-redux';
import Banner from '../../components/banner/Banner';
import { useEffect, useState } from 'react';
import {
	disablefooterBg,
	enablefooterBg,
} from '../../store/reducers/GlobalReducer';
import {
	Box,
	Button,
	Container,
	Divider,
	Grid2 as Grid,
	Paper,
	Step,
	StepLabel,
	Stepper,
} from '@mui/material';
import styles from './Booking.module.scss';
import {
	Done,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material';
import DoctorSelector from './DoctorSelector';
import BookingTimeSelector from './BookingTimeSelector';
import BookingDetailForm from './BookingDetailForm';
import BookingSummary from './BookingSummary';
import { useNavigate } from 'react-router-dom';
import { sendToast, ToastType } from '../../components/toast';

const steps = [
	{ label: 'Doctor', id: 'doctor' },
	{ label: 'Date & Time', id: 'date' },
	{ label: 'Basic Details', id: 'details' },
	{ label: 'Summary', id: 'summary' },
];

const Booking = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) =>
			Math.min(steps?.length, prevActiveStep + 1)
		);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => Math.max(0, prevActiveStep - 1));
	};

	const handleSubmit = () => {
		sendToast(ToastType.SUCCESS, 'Appointment successful');
		navigate('/');
	};

	useEffect(() => {
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	});

	return (
		<>
			<Banner
				heading="Book an appointment"
				breadcrumbLinks={[
					{ to: '/', title: 'Home' },
					{ title: 'Book an appointment' },
				]}
			/>
			<Container maxWidth="md" className={styles.Container}>
				<Grid container spacing={3}>
					<Grid size={{ lg: 3, md: 4, sm: 12, xs: 12 }}>
						<Box sx={{ px: 5, pt: 3 }}>
							<Stepper activeStep={activeStep} orientation="vertical">
								{steps.map((step) => (
									<Step key={step.label}>
										<StepLabel>{step.label}</StepLabel>
									</Step>
								))}
							</Stepper>
						</Box>
					</Grid>
					<Grid size={{ lg: 9, md: 8, sm: 12, xs: 12 }}>
						<Paper
							elevation={0}
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								p: 3,
							}}
						>
							{activeStep === 0 && <DoctorSelector />}
							{activeStep === 1 && <BookingTimeSelector />}
							{activeStep === 2 && <BookingDetailForm />}
							{activeStep === 3 && <BookingSummary />}
						</Paper>
						<Divider sx={{ px: 20 }} />
						<Box display="flex" justifyContent="end" p={2}>
							<Button
								variant="outlined"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mt: 1, mr: 1 }}
							>
								<KeyboardArrowLeft />
								Back
							</Button>
							<Button
								variant="contained"
								onClick={
									activeStep === steps.length - 1 ? handleSubmit : handleNext
								}
								sx={{ mt: 1, mr: 1 }}
							>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								{activeStep !== steps.length - 1 ? (
									<KeyboardArrowRight />
								) : (
									<Done />
								)}
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
export default Booking;
