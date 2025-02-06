import { Box, Typography } from '@mui/material';
import SummaryImage from '../../assets/summary-white.svg';

const BookingSummary = () => {
	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems={'center'}
			gap={2}
			flexDirection="column"
		>
			<img src={SummaryImage} alt="Summary" />
			<Typography variant="h4">Summary</Typography>
			<Typography variant="subtitle2">
				Your appointment booking summary
			</Typography>
			<Typography variant="h6">Customer</Typography>
			<Typography>John Doe</Typography>
			<Typography variant="h6">Doctor</Typography>
			<Typography>Dr. Elizabeth Foster</Typography>
			<Typography variant="h6">Date & Time</Typography>
			<Typography>February 4, 2025, 12:30 pm - 01:00 pm</Typography>
		</Box>
	);
};

export default BookingSummary;
