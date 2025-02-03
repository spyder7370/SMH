import { Box, Grid2, Typography } from '@mui/material';
// import {  } from "react-router-dom";
import './doctors.css';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function DocktorsProfile() {
	// const { id } = useParams();
	const name = 'Dr. Rajeev Agarwal';
	const position = 'Senior Director';
	const speciality = 'Breast Cancer';
	const departments = ['Breast Cancer'];
	const education = ['Fellowship(Surgical Oncology)', 'Senior Resident(cancer Surgery)', 'M. S.(Surgery) , M.B.B.S.'];
	const imageUrl = '../../src/assets/doctor_images.png';
	// const dateSlots = {"2025-01-25":{1:[["9:30","9:40"]]}}
	return (
		<Box sx={{ borderRadius: 10 }}>
			<Grid2 container spacing={{ xs: 2, md: 3 }} columns={12} sx={{ backgroundColor: '#F6F6F6' }}>
				<Grid2 key="Doctor_profile">
					<img title={`${name}`} height={400} width={500} src={imageUrl} />
				</Grid2>
				<Grid2 key="Doctor_details">
					<Typography sx={{ fontWeight: 550, fontSize: 20 }}>{name}</Typography>
					<Typography>{position}</Typography>
					<Typography>{speciality}</Typography>
					<Typography>
						Departments:{' '}
						{departments.map((value) => (
							<Typography key={value}>{value}</Typography>
						))}
					</Typography>
					<Typography>
						Education:{' '}
						{education.map((value) => (
							<Typography key={value}>{value}</Typography>
						))}
					</Typography>
				</Grid2>
				<Grid2 key="calender">
					<DateCalendar defaultValue={dayjs('2022-04-17')} />
				</Grid2>
			</Grid2>
		</Box>
	);
}

export default DocktorsProfile;
