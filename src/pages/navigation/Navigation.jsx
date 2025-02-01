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
	Badge,
} from '@mui/material';
import {
	Menu as MenuIcon,
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	MoveToInbox as InboxIcon,
	Mail as MailIcon,
	Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setTheme } from '../../store/reducers/GlobalReducer';

const drawerWidth = 240;

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

const Navigation = (props) => {
	const dispatch = useDispatch();
	const theme = useTheme();

	const [open, setOpen] = useState(false);
	const themeMode = useSelector((state) => state?.global?.theme);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const toggleTheme = () => {
		dispatch(setTheme(themeMode === 'dark' ? 'light' : 'dark'));
	};

	const openLoading = () => {
		dispatch(setLoading(true));
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
					<Typography variant="h6" noWrap component="div">
						SMH
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: 'flex' }}>
						<IconButton size="large" color="inherit" onClick={openLoading}>
							<Badge badgeContent={4} color="error">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton size="large" color="inherit" onClick={toggleTheme}>
							<Badge badgeContent={17} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton>
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
					<ListItem key="Inbox" disablePadding sx={{ display: 'block' }}>
						<ListItemButton sx={[{ minHeight: 48, px: 3.5 }, { justifyContent: 'initial' }]}>
							<ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Inbox" sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem key="All mail" disablePadding sx={{ display: 'block' }}>
						<ListItemButton sx={[{ minHeight: 48, px: 3.5 }, { justifyContent: 'initial' }]}>
							<ListItemIcon sx={[{ minWidth: 0, justifyContent: 'center' }, open ? { mr: 3 } : { mr: 'auto' }]}>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="All mail" sx={[open ? { opacity: 1 } : { opacity: 0 }]} />
						</ListItemButton>
					</ListItem>
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
