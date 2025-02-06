import {
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Grid2 as Grid,
	Typography,
} from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';

const cards = [
	{
		id: 1,
		title: '10:00 AM',
	},
	{
		id: 2,
		title: '10:30 AM',
	},
	{
		id: 3,
		title: '11:00 AM',
	},
	{
		id: 4,
		title: '11:30 AM',
	},
	{
		id: 5,
		title: '12:00 PM',
	},
	{
		id: 6,
		title: '12:30 PM',
	},
	{
		id: 7,
		title: '01:00 PM',
	},
	{
		id: 8,
		title: '01:30 PM',
	},
	{
		id: 9,
		title: '02:00 PM',
	},
	{
		id: 10,
		title: '02:30 PM',
	},
];

const BookingTimeSelector = () => {
	const [selectedCard, setSelectedCard] = useState(-1);

	return (
		<Grid container spacing={3} width="100%">
			<Grid size={6} display="flex" flexGrow={1}>
				<DateCalendar minDate={dayjs(new Date())} />
			</Grid>
			<Grid size={6} display="flex" flexGrow={1}>
				<Divider orientation="vertical" sx={{ ml: -1.5, mr: 1.5 }} />
				<Grid container spacing={1} maxHeight="20rem" overflow="scroll">
					{cards.map((card, index) => (
						<Grid key="d" size={6} display="flex" flexGrow={1}>
							<Card variant="outlined" sx={{ height: '100%', width: '100%' }}>
								<CardActionArea
									onClick={() => setSelectedCard(index)}
									data-active={selectedCard === index ? '' : undefined}
									sx={{
										height: '100%',
										'&[data-active]': {
											backgroundColor: 'action.selected',
											'&:hover': {
												backgroundColor: 'action.selectedHover',
											},
										},
									}}
								>
									<CardContent sx={{ height: '100%' }}>
										<Typography variant="subtitle2">{card.title}</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default BookingTimeSelector;
