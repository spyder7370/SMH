import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
	Box,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from '@mui/material';
import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Translate,
	DarkMode,
	LightMode,
	ReportProblem,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setTheme } from '../../store/reducers/GlobalReducer';
import { useTranslation } from 'react-i18next';
import { BOTTOM_MENU, TOP_MENU } from './navigationConstants';
import { useNavigate } from 'react-router-dom';
import { sendToast, ToastType } from '../../components/toast';
import { logoutUser } from '../../utils/auth';
import EmergencyDialog from './EmergencyDialog';
import {
	RenderIcon,
	Drawer,
	AppBar,
	DrawerHeader,
} from './NavigationStyledComponents';
import styles from './Navigation.module.scss';

const Navigation = (props) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const navigate = useNavigate();
	const {
		i18n: { changeLanguage, language },
	} = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(language);
	const [open, setOpen] = useState(false);
	const [emergencyDialogOpen, setEmergencyDialogOpen] = useState(false);
	const themeMode = useSelector((state) => state?.global?.theme);

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === 'en' ? 'hi' : 'en';
		setCurrentLanguage(newLanguage);
		changeLanguage(newLanguage);
		sendToast(ToastType.SUCCESS, 'Successfully changed language');
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleEmergencyDialogOpen = () => {
		setEmergencyDialogOpen(true);
	};

	const handleEmergencyDialogClose = () => {
		setEmergencyDialogOpen(false);
	};

	const toggleTheme = () => {
		dispatch(setTheme(themeMode === 'dark' ? 'light' : 'dark'));
	};

	const handleNavigation = (url) => {
		if (url === '/logout') {
			dispatch(setLoading(true));
			logoutUser();
			dispatch(setLoading(false));
			sendToast(ToastType.SUCCESS);
			navigate('/');
		} else if (url) navigate(url);
		handleDrawerClose();
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AppBar
					position="fixed"
					open={open}
					color="transparent"
					className={styles.AppBarBackground}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							onClick={handleDrawerOpen}
							edge="start"
							sx={[
								{ marginRight: 5, marginLeft: { xs: 0.4, md: -0.4 } },
								open && { display: 'none' },
							]}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							noWrap
							component="div"
							className={styles['Cursor-Pointer']}
							onClick={() => {
								handleNavigation('/');
							}}
						>
							SMH
						</Typography>
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: 'flex', gap: 0.5 }}>
							<Tooltip title="Emergency">
								<IconButton
									size="large"
									color="inherit"
									onClick={handleEmergencyDialogOpen}
								>
									<ReportProblem color="error" />
									<Typography
										variant="subtitle2"
										color="error"
										className={styles.EmergencyTitle}
									>
										Emergency
									</Typography>
								</IconButton>
							</Tooltip>
							<Tooltip
								title={`Translate to ${currentLanguage === 'en' ? 'hi' : 'en'}`}
							>
								<IconButton
									size="large"
									color="inherit"
									onClick={handleChangeLanguage}
								>
									<Translate />
								</IconButton>
							</Tooltip>
							<Tooltip title="Toggle theme">
								<IconButton size="large" color="inherit" onClick={toggleTheme}>
									{themeMode === 'dark' ? <DarkMode /> : <LightMode />}
								</IconButton>
							</Tooltip>
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme?.direction === 'rtl' ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						{TOP_MENU?.map((item) => (
							<ListItem
								key={item?.key}
								disablePadding
								className={styles['Display-Block']}
							>
								<Tooltip title={item?.tooltipTitle} placement="right">
									<ListItemButton
										className={styles.SideBarListItemButton}
										onClick={() => {
											handleNavigation(item?.url);
										}}
									>
										<ListItemIcon
											className={styles.SideBarListItemIcon}
											sx={[open ? { mr: 3 } : { mr: 'auto' }]}
										>
											<RenderIcon icon={item?.icon} />
										</ListItemIcon>
										<ListItemText
											primary={item?.text}
											sx={[open ? { opacity: 1 } : { opacity: 0 }]}
										/>
									</ListItemButton>
								</Tooltip>
							</ListItem>
						))}
					</List>
					<Box sx={{ flexGrow: 1 }} />
					<List>
						{BOTTOM_MENU?.map((item) => (
							<ListItem
								key={item?.key}
								disablePadding
								className={styles['Display-Block']}
							>
								<Tooltip title={item?.tooltipTitle} placement="right">
									<ListItemButton
										className={styles.SideBarListItemButton}
										onClick={() => {
											handleNavigation(item?.url);
										}}
									>
										<ListItemIcon
											className={styles.SideBarListItemIcon}
											sx={[open ? { mr: 3 } : { mr: 'auto' }]}
										>
											<RenderIcon icon={item?.icon} />
										</ListItemIcon>
										<ListItemText
											primary={item?.text}
											sx={[open ? { opacity: 1 } : { opacity: 0 }]}
										/>
									</ListItemButton>
								</Tooltip>
							</ListItem>
						))}
					</List>
				</Drawer>
				<Box component="main" sx={{ flexGrow: 1 }}>
					<DrawerHeader />
					{props?.children}
				</Box>
			</Box>
			<EmergencyDialog
				open={emergencyDialogOpen}
				handleClose={handleEmergencyDialogClose}
			/>
		</>
	);
};

export default Navigation;
