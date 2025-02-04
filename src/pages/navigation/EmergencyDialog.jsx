import { LocalPhone, LocalShipping } from '@mui/icons-material';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import styles from './Navigation.module.scss';

const EmergencyDialog = (props) => {
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={!!props?.open}
			onClose={props?.handleClose}
		>
			<DialogTitle className={styles['Text-Center']}>Emergency</DialogTitle>
			<DialogContent>
				<DialogContentText>
					<div>
						Please contact the hospital immediately in case of emergency
					</div>
					<br />
					<div className={styles.EmergencyPhone}>
						<LocalPhone /> Hospital helpline: +91-8423601531
					</div>
					<div className={styles.EmergencyPhone}>
						<LocalShipping /> Ambulance helpline: +91-8423601531
					</div>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={props?.handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	);
};

export default EmergencyDialog;
