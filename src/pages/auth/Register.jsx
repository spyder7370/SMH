import { Button, Typography } from '@mui/material';
import { PASSWORD_RULES } from './authConstants';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../utils/auth';
import {
	disablefooterBg,
	enablefooterBg,
} from '../../store/reducers/GlobalReducer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormikInput from '../../components/formikInput/FormikInput';

function Register() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	});

	const formik = useFormik({
		initialValues: {
			Name: '',
			Email: '',
			Password: '',
			ConfirmPassword: '',
		},
		validationSchema: Yup.object({
			Name: Yup.string()
				.min(5, 'Must be greater than 5 characters.')
				.max(50, 'Must be less than 50 characters.')
				.required('No name provided.'),
			Email: Yup.string()
				.email('Invalid email address.')
				.required('No email provided.'),
			Password: Yup.string()
				.matches(PASSWORD_RULES, {
					message:
						'Please create a stronger password. ' +
						'Password must contain min 5 characters, ' +
						'1 uppercase character, 1 lowercase character ' +
						'and 1 numeric digit',
				})
				.required('No password provided.'),
			ConfirmPassword: Yup.string()
				.oneOf([Yup.ref('Password'), ''], 'Passwords must match.')
				.required('Please enter the password again'),
		}),
		onSubmit: (values) => {
			logoutUser();
			const body = {
				username: values?.Name,
				email: values?.Email,
				password: values?.Password,
			};
			console.log(body);
		},
	});

	return (
		<div className={styles.Container}>
			<Typography variant="h3" gutterBottom className={styles.HeadingText}>
				Register
			</Typography>
			<form onSubmit={formik.handleSubmit} id="login-form">
				<div className={styles.TextField}>
					<FormikInput
						formik={formik}
						id="Name"
						label="Name"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={styles.TextField}>
					<FormikInput
						formik={formik}
						id="Email"
						label="Email"
						type="email"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={styles.TextField}>
					<FormikInput
						formik={formik}
						id="Password"
						label="Password"
						type="password"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={styles.TextField}>
					<FormikInput
						formik={formik}
						id="ConfirmPassword"
						label="Confirm Password"
						type="password"
						variant="standard"
						fullWidth
					/>
				</div>
				<div>
					Already have an account?{' '}
					<Link className={styles['Text-Decoration-None']} to="/login">
						<Typography color="primary" className={styles.SubLinks}>
							Login
						</Typography>{' '}
					</Link>{' '}
					here
				</div>
				<div className={styles.TextField}>
					<Button fullWidth size="large" variant="contained" type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}

export default Register;
