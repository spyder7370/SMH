import { styled } from '@mui/material/styles';
import { Drawer as MuiDrawer, AppBar as MuiAppBar } from '@mui/material';
import {
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

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
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

export const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
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

export const RenderIcon = (props) => {
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
