import { useTranslation } from 'react-i18next';

const Home = () => {
	const { t } = useTranslation();

	return (
		<div>
			Home {import.meta.env.VITE_KEY} {t('welcome')}
		</div>
	);
};

export default Home;
