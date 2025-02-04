import { Card, CardContent, CardMedia, Grid2, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// TODO: make card dynamic
function DoctorInfoCard(props) {
	const navigate = useNavigate();
	return (
		<Card elevation={4} sx={{ maxWidth: 400 }}>
			<CardMedia sx={{ height: 200, backgroundPosition: 'top' }} image={props?.imageUrl} title={props?.name} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props?.name}
				</Typography>
				<Typography variant="body2" sx={{ color: 'text.secondary' }}>
					{props?.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="secondary">
					Meet
				</Button>
				<Button size="small" onClick={() => navigate(`/doctor/profile/${props.id}`)}>
					Veiw Profile
				</Button>
			</CardActions>
		</Card>
	);
}

function Doctors() {
	return (
		<div>
			<div>
				<Typography align="center" sx={{ color: 'royalblue', fontWeight: 600, fontSize: 32 }}>
					Experienced Medical Team
				</Typography>
				<Typography align="center">
					Providing expert medical care with a team of highly skilled doctors specialized in various fields.
				</Typography>
			</div>

			<Typography sx={{ fontWeight: 700, fontSize: 16 }}>
				We are a dedicated Department of doctors with over 15 years of experience, offering comprehensive medical
				services to our patients.
			</Typography>
			<Typography sx={{ color: 'grey' }}>
				Our team of doctors has over 15 years of experience in various departments such as surgery, medicine, obstetrics
				and gynecology, orthopedics, pediatrics, urology, and neurology. With their expertise and extensive knowledge in
				these areas, our doctors are dedicated to providing the best possible care and treatment for our patients.
				Whether it s a routine check-up or a more complex surgical procedure, our team is committed to delivering
				top-quality healthcare services to ensure the well-being and satisfaction of all our patients. We take pride in
				the professionalism and compassion of our doctors, and we strive to create a comfortable and supportive
				environment for everyone who walks through our doors. Trust our experienced team to provide you with the highest
				standard of medical care.
			</Typography>
			<Grid2 container spacing={{ xs: 2, md: 5 }}>
				{Array.from(Array(6)).map((_, index) => (
					<Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
						<DoctorInfoCard
							imageUrl="../src/assets/doctor_images.jpg"
							name="Jagendra Purohit"
							description="This is a sample doctor we need to change as well"
							id={123}
						/>
					</Grid2>
				))}
			</Grid2>
		</div>
	);
}

export default Doctors;
