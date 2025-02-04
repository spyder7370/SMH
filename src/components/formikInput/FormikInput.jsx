import { TextField } from '@mui/material';

const FormikInput = (props) => {
	const { formik, id, label, type, variant } = props;
	return (
		<TextField
			fullWidth
			id={id || ''}
			label={label || ''}
			type={type || 'text'}
			variant={variant || 'outlined'}
			{...formik?.getFieldProps(id)}
			error={!!(formik?.touched?.[id] && formik?.errors?.[id])}
			helperText={
				formik?.touched?.[id] && formik?.errors?.[id]
					? formik?.errors?.[id]
					: null
			}
			{...props}
		/>
	);
};

export default FormikInput;
