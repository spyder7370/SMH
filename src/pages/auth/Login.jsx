import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Auth.module.scss';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/auth';
import { setLoading } from '../../store/reducers/GlobalReducer';
import { Link } from 'react-router-dom';

function Login() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			Email: '',
			Password: '',
		},
		validationSchema: Yup.object({
			Email: Yup.string().email('Invalid email address.').required('No input provided.'),
			Password: Yup.string().required('No password provided.'),
		}),
		onSubmit: (values) => {
			logoutUser();
			const body = {
				email: values.Email,
				password: values.Password,
			};
			console.log(body);

			dispatch(setLoading(true));
			dispatch(setLoading(false));
			// loginUser(body)
			// 	.then((res) => {
			// 		if (res?.data?.data) {
			// 			dispatch(
			// 				setToastMessage({
			// 					toastMessage: 'Welcome back to Stackr.',
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
				Login
			</Typography>
			<form onSubmit={formik.handleSubmit} id="login-form">
				<div className={styles.TextField}>
					<TextField
						fullWidth
						id="Email"
						label="Email or Mobile number"
						type="email"
						variant="standard"
						{...formik.getFieldProps('Email')}
						error={!!(formik.touched.Email && formik.errors.Email)}
						helperText={formik.touched.Email && formik.errors.Email ? formik.errors.Email : null}
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
						helperText={formik.touched.Password && formik.errors.Password ? formik.errors.Password : null}
					/>
				</div>
				<div>
					New to SMH?{' '}
					<Link style={{ textDecoration: 'none' }} to="/register">
						<Typography color="primary" className={styles.SubLinks}>
							Create
						</Typography>{' '}
					</Link>
					an account here
				</div>
				<div>
					{`Don't remember your password? `}
					<Link style={{ textDecoration: 'none' }} to="/reset">
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
