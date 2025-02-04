import Cookies from 'universal-cookie';
import { sendToast, ToastType } from '../components/toast';

export const setCookie = (name, value) => {
	if (!name) return;
	const cookies = new Cookies();
	cookies.set(name, value);
};

export const getCookie = (name) => {
	if (!name) return '';
	const cookies = new Cookies();
	return cookies.get(name);
};

export const isCookiePresent = (name) => {
	if (!name) return false;
	const cookies = new Cookies();
	return cookies.get(name)?.length > 0;
};

export const removeCookie = (name) => {
	if (!name) return;
	const cookies = new Cookies();
	cookies.remove(name);
};

export const logoutUser = (enableToast = false) => {
	try {
		if (!isCookiePresent('token')) return;
		removeCookie('token');
	} catch {
		if (enableToast)
			sendToast(
				ToastType.ERROR,
				'Logout failed, please contact an administrator'
			);
	} finally {
		if (enableToast)
			sendToast(ToastType.SUCCESS, 'You have successfully logged out');
	}
};
