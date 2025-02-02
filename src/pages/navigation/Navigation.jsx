import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
	Box,
	Drawer as MuiDrawer,
	AppBar as MuiAppBar,
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
	Login,
	BookmarkAdd,
	AccountCircle,
	Logout,
	People,
	Badge,
	Engineering,
	ShoppingCart,
	PersonAdd,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setTheme } from '../../store/reducers/GlobalReducer';
import { useTranslation } from 'react-i18next';
import { BOTTOM_MENU, TOP_MENU } from './navigationConstants';
import { useNavigate } from 'react-router-dom';
import { sendToast, ToastType } from '../../components/toast';
import { logoutUser } from '../../utils/auth';

const drawerWidth = 260;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(10)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(10)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	variants: [
		{
			props: ({ open }) => open,
			style: {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
		},
	],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	variants: [
		{
			props: ({ open }) => open,
			style: {
				...openedMixin(theme),
				'& .MuiDrawer-paper': openedMixin(theme),
			},
		},
		{
			props: ({ open }) => !open,
			style: {
				...closedMixin(theme),
				'& .MuiDrawer-paper': closedMixin(theme),
			},
		},
	],
}));

const RenderIcon = (props) => {
	switch (props?.icon) {
		case 'BookmarkAdd':
			return <BookmarkAdd />;
		case 'ShoppingCart':
			return <ShoppingCart />;
		case 'Badge':
			return <Badge />;
		case 'People':
			return <People />;
		case 'Login':
			return <Login />;
		case 'AccountCircle':
			return <AccountCircle />;
		case 'Engineering':
			return <Engineering />;
		case 'Logout':
			return <Logout />;
		case 'PersonAdd':
			return <PersonAdd />;
		default:
			return null;
	}
};

const Navigation = (props) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const navigate = useNavigate();
	const {
		i18n: { changeLanguage, language },
	} = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(language);
	const [open, setOpen] = useState(false);
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

	const toggleTheme = () => {
		dispatch(setTheme(themeMode === 'dark' ? 'light' : 'dark'));
		sendToast(ToastType.SUCCESS, 'Successfully toggled theme');
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
		<Box sx={{ display: 'flex' }}>
			<AppBar position="fixed" open={open} color="inherit">
				<Toolbar>
					<IconButton
						color="inherit"
						onClick={handleDrawerOpen}
						edge="start"
						sx={[{ marginRight: 5, marginLeft: { xs: 0.4, md: -0.4 } }, open && { display: 'none' }]}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ cursor: 'pointer' }}
						onClick={() => {
							handleNavigation('/');
						}}
					>
						SMH
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: 'flex', gap: 0.5 }}>
						<Tooltip title={`Translate to ${currentLanguage === 'en' ? 'hi' : 'en'}`}>
							<IconButton size="large" color="inherit" onClick={handleChangeLanguage}>
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
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{TOP_MENU?.map((item) => (
						<ListItem key={item?.key} disablePadding sx={{ display: 'block' }}>
							<Tooltip title={item?.tooltipTitle} placement="right">
								<ListItemButton
									sx={[{ minHeight: 48, px: 3.5 }, { justifyContent: 'initial' }]}
									onClick={() => {
										handleNavigation(item?.url);
									}}
								>
									<ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
										<RenderIcon icon={item?.icon} />
									</ListItemIcon>
									<ListItemText primary={item?.text} sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
								</ListItemButton>
							</Tooltip>
						</ListItem>
					))}
				</List>
				<Box sx={{ flexGrow: 1 }} />
				<List>
					{BOTTOM_MENU?.map((item) => (
						<ListItem key={item?.key} disablePadding sx={{ display: 'block' }}>
							<Tooltip title={item?.tooltipTitle} placement="right">
								<ListItemButton
									sx={[{ minHeight: 48, px: 3.5 }, { justifyContent: 'initial' }]}
									onClick={() => {
										handleNavigation(item?.url);
									}}
								>
									<ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
										<RenderIcon icon={item?.icon} />
									</ListItemIcon>
									<ListItemText primary={item?.text} sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
								</ListItemButton>
							</Tooltip>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{props?.children}
			</Box>
		</Box>
	);
};

export default Navigation;
