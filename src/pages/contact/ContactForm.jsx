import { Container, Typography, Grid2 as Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormikInput from '../../components/formikInput';
import styles from './Contact.module.scss';
import ContactUsImage from '../../assets/contact-us-img.png';

const ContactForm = () => {
	const formik = useFormik({
		initialValues: {
			Name: '',
			Email: '',
			Phone: '',
			PatientId: '',
			Message: '',
		},
		validationSchema: Yup.object({
			Name: Yup.string().required('No name provided.'),
			Email: Yup.string().email('Invalid email address.').optional(),
			Phone: Yup.string()
				.min(10, 'Invalid phone number')
				.max(10, 'Invalid phone number')
				.required('No phone number provided.'),
			PatientId: Yup.string().optional(),
			Message: Yup.string().required('No message provided.'),
		}),
		onSubmit: (values) => {
			const body = {
				name: values.Name,
				email: values.Email,
				phone: values.Phone,
				patientId: values.PatientId,
				message: values.Message,
			};
			console.log(body);
		},
	});

	return (
		<div>
			<Container maxWidth="md" className={styles.Container}>
				<Typography
					sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h4' } }}
					className={styles.ContactFormHeading}
				>
					Contact us
				</Typography>
				<Grid container spacing={0}>
					<Grid
						data-aos-duration="900"
						data-aos="zoom-in"
						size={{ lg: 5, md: 6, sm: 12, xs: 12 }}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<img
							className={styles.ContactFormImage}
							src={ContactUsImage}
							alt="Contact Form"
						/>
						<Typography
							className={styles.ContactFormImageSubtitle}
							variant="h6"
						>
							Make Appointment & Take Care Of Your Healthy Life
						</Typography>
					</Grid>
					<Grid
						data-aos-duration="900"
						data-aos="zoom-in"
						size={{ lg: 7, md: 6, sm: 12, xs: 12 }}
					>
						<form onSubmit={formik.handleSubmit} id="login-form">
							<Grid container columnSpacing={2} rowSpacing={2}>
								<Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
									<FormikInput
										formik={formik}
										id="Name"
										label="Name"
										fullWidth
									/>
								</Grid>
								<Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
									<FormikInput
										formik={formik}
										id="Email"
										label="Email"
										type="email"
										fullWidth
									/>
								</Grid>
								<Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
									<FormikInput
										formik={formik}
										id="Phone"
										label="Phone"
										fullWidth
									/>
								</Grid>
								<Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
									<FormikInput
										formik={formik}
										id="PatientId"
										label="Patient Id"
										fullWidth
									/>
								</Grid>
								<Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
									<FormikInput
										formik={formik}
										id="Message"
										label="Message"
										fullWidth
										multiline
										rows={4}
									/>
								</Grid>
								<Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
									<Button
										className={styles.ContactFormSubmitButton}
										size="large"
										variant="outlined"
										type="submit"
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ContactForm;
