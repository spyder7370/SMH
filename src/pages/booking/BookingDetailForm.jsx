import { Grid2 as Grid } from '@mui/material';
import FormikInput from '../../components/formikInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingDetailForm = () => {
	const formik = useFormik({
		initialValues: {
			Name: '',
			Email: '',
			Phone: '',
			PatientId: '',
			Note: '',
		},
		validationSchema: Yup.object({
			Name: Yup.string().optional(),
			Email: Yup.string().email('Invalid email address.').optional(),
			Phone: Yup.string()
				.min(10, 'Invalid phone number')
				.max(10, 'Invalid phone number')
				.optional(),
			PatientId: Yup.string().optional(),
			Note: Yup.string().optional(),
		}),
	});

	return (
		<form
			style={{
				maxHeight: '20rem',
				overflow: 'scroll',
			}}
		>
			<Grid container columnSpacing={2} rowSpacing={2} mt={1}>
				<Grid size={12}>
					<FormikInput formik={formik} id="Name" label="Name" fullWidth />
				</Grid>
				<Grid size={12}>
					<FormikInput
						formik={formik}
						id="Email"
						label="Email"
						type="email"
						fullWidth
					/>
				</Grid>
				<Grid size={12}>
					<FormikInput formik={formik} id="Phone" label="Phone" fullWidth />
				</Grid>
				<Grid size={12}>
					<FormikInput
						formik={formik}
						id="PatientId"
						label="Patient Id"
						fullWidth
					/>
				</Grid>
				<Grid size={12}>
					<FormikInput
						formik={formik}
						id="Note"
						label="Note"
						fullWidth
						multiline
						rows={4}
					/>
				</Grid>
			</Grid>
		</form>
	);
};
export default BookingDetailForm;
