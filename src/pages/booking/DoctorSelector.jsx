import {
	Card,
	CardActionArea,
	CardContent,
	Grid2 as Grid,
	Typography,
} from '@mui/material';
import { useState } from 'react';

const cards = [
	{
		id: 1,
		title: 'Dr. Daniel Brown',
		description: 'Cardiologist',
	},
	{
		id: 2,
		title: 'Dr. Ava White',
		description: 'Cardiologist',
	},
	{
		id: 3,
		title: 'Dr. David Lee',
		description: 'Cardiologist',
	},
	{
		id: 4,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 5,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 6,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 7,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 8,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 9,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
	{
		id: 10,
		title: 'Dr. Elizabeth Foster',
		description: 'Cardiologist',
	},
];

const DoctorSelector = () => {
	const [selectedCard, setSelectedCard] = useState(-1);

	return (
		<Grid container spacing={3} maxHeight="20rem" overflow="scroll">
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
								<Typography variant="h6" component="div">
									{card.title}
								</Typography>
								<Typography variant="subtitle2" color="primary">
									{card.description}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default DoctorSelector;
