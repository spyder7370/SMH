import { useSelector } from 'react-redux';
import Loading from '../../components/loading';

const GlobalLoading = () => {
	const loading = useSelector((state) => state?.global?.loading);
	return <Loading open={!!loading} />;
};

export default GlobalLoading;
