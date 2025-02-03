import { Button, TextField, Typography } from '@mui/material';
import { PASSWORD_RULES } from './authConstants';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/auth';
import {
	disablefooterBg,
	enablefooterBg,
	setLoading,
} from '../../store/reducers/GlobalReducer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	});

	// const navigate = useNavigate();
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
			ConfirmPassword: Yup.string().oneOf(
				[Yup.ref('Password'), ''],
				'Passwords must match.'
			),
		}),
		onSubmit: (values) => {
			logoutUser();
			const body = {
				username: values.Name,
				email: values.Email,
				password: values.Password,
			};
			console.log(body);

			dispatch(setLoading(true));
			dispatch(setLoading(false));
			// registerUser(body)
			// 	.then((res) => {
			// 		if (res?.data?.data) {
			// 			dispatch(
			// 				setToastMessage({
			// 					toastMessage: 'The account has been created successfully, welcome to Stackr',
			// 					toastType: 'success',
			// 				})
			// 			);
			// 			navigate('/');
			// 		}
			// 	})
			// 	.finally(() => dispatch(setApplicationLoading(false)));
		},
	});

	return (
		<div className={styles.Container}>
			<Typography variant="h3" gutterBottom className={styles.HeadingText}>
				Register
			</Typography>
			<form onSubmit={formik.handleSubmit} id="login-form">
				<div className={styles.TextField}>
					<TextField
						fullWidth
						id="Name"
						label="Name"
						variant="standard"
						{...formik.getFieldProps('Name')}
						error={!!(formik.touched.Name && formik.errors.Name)}
						helperText={
							formik.touched.Name && formik.errors.Name
								? formik.errors.Name
								: null
						}
					/>
				</div>
				<div className={styles.TextField}>
					<TextField
						fullWidth
						id="Email"
						label="Email"
						type="email"
						variant="standard"
						{...formik.getFieldProps('Email')}
						error={!!(formik.touched.Email && formik.errors.Email)}
						helperText={
							formik.touched.Email && formik.errors.Email
								? formik.errors.Email
								: null
						}
					/>
				</div>
				<div className={styles.TextField}>
					<TextField
						fullWidth
						id="Password"
						label="Password"
						type="password"
						variant="standard"
						{...formik.getFieldProps('Password')}
						error={!!(formik.touched.Password && formik.errors.Password)}
						helperText={
							formik.touched.Password && formik.errors.Password
								? formik.errors.Password
								: null
						}
					/>
				</div>
				<div className={styles.TextField}>
					<TextField
						fullWidth
						id="ConfirmPassword"
						label="Confirm Password"
						type="password"
						variant="standard"
						{...formik.getFieldProps('ConfirmPassword')}
						error={
							!!(
								formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
							)
						}
						helperText={
							formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
								? formik.errors.ConfirmPassword
								: null
						}
					/>
				</div>
				<div>
					Already have an account?{' '}
					<Link style={{ textDecoration: 'none' }} to="/login">
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
