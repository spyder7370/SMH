import { Button, Typography } from '@mui/material';
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

function Login() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(enablefooterBg());
		return () => {
			dispatch(disablefooterBg());
		};
	});

	const formik = useFormik({
		initialValues: {
			Email: '',
			Password: '',
		},
		validationSchema: Yup.object({
			Email: Yup.string()
				.email('Invalid email address.')
				.required('No input provided.'),
			Password: Yup.string().required('No password provided.'),
		}),
		onSubmit: (values) => {
			logoutUser();
			const body = {
				email: values?.Email,
				password: values?.Password,
			};
			console.log(body);
		},
	});

	return (
		<div className={styles.Container}>
			<Typography variant="h3" gutterBottom className={styles.HeadingText}>
				Login
			</Typography>
			<form onSubmit={formik.handleSubmit} id="login-form">
				<div className={styles.TextField}>
					<FormikInput
						formik={formik}
						id="Email"
						label="Email or Mobile number"
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
				<div>
					New to SMH?{' '}
					<Link className={styles['Text-Decoration-None']} to="/register">
						<Typography color="primary" className={styles.SubLinks}>
							Create
						</Typography>{' '}
					</Link>
					an account here
				</div>
				<div>
					{`Don't remember your password? `}
					<Link className={styles['Text-Decoration-None']} to="/reset">
						<Typography color="primary" className={styles.SubLinks}>
							Reset
						</Typography>{' '}
					</Link>
					it here
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

export default Login;
