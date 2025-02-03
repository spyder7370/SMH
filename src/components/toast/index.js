import { toast } from 'react-toastify';

export const sendToast = (type, message) => {
	if (!message) return;
	const toastProps = {
		position: 'bottom-left',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	};

	if (!type) {
		toast(message, toastProps);
	} else {
		toast[type](message, toastProps);
	}
};

export const ToastType = {
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
};
