import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Banner.module.scss';
import { useSelector } from 'react-redux';

const Banner = (props) => {
	const { heading, breadcrumbLinks } = props;
	const theme = useSelector((state) => state?.global?.theme);

	return (
		<div
			className={
				theme === 'light'
					? styles.BannerContainerLight
					: styles.BannerContainerDark
			}
		>
			{heading && (
				<Typography
					className={styles['Font-Family-Medium']}
					sx={{ typography: { xs: 'h6', sm: 'h5', md: 'h3' } }}
				>
					{heading}
				</Typography>
			)}
			{breadcrumbLinks?.length && (
				<Breadcrumbs>
					{breadcrumbLinks?.map((link) => (
						<Link
							component={RouterLink}
							underline={link?.to ? 'hover' : 'none'}
							to={link?.to ? link?.to : null}
							color="inherit"
							key={link?.title}
							className={styles['Font-Family-Medium']}
						>
							{link?.title}
						</Link>
					))}
				</Breadcrumbs>
			)}
		</div>
	);
};
export default Banner;
