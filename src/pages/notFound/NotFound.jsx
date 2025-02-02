import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';
import NotFoundImage from '../../assets/illustration-404.svg';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<Container className={styles.Container} maxWidth="sm">
			<Typography sx={{ typography: { xs: 'h5', sm: 'h4', md: 'h3' } }}>Page not found!</Typography>
			<Typography sx={{ typography: { xs: 'body2', sm: 'body2', md: 'body1' } }}>
				{`Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL?`}
				Be sure to check yourspelling.
			</Typography>
			<img src={NotFoundImage} className={styles.Image} alt="404" />
			<Button
				onClick={() => {
					navigate('/');
				}}
				size="large"
				variant="contained"
			>
				Go to home
			</Button>
		</Container>
	);
};

export default NotFound;
