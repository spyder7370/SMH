import { Backdrop, CircularProgress, Paper } from '@mui/material';
import styles from './Loading.module.scss';

function Loading(props) {
	const { open } = props;
	return (
		!!open && (
			<Backdrop open={!!open} sx={{ zIndex: 1301 }}>
				<Paper elevation={0} className={styles.PageWrapper}>
					<CircularProgress thickness={7} />
					<div className={styles.Header}>This will take a few more seconds...</div>
					<div className={styles.Caption}>Please wait as we load the page for you.</div>
				</Paper>
			</Backdrop>
		)
	);
}

export default Loading;
