import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATIONS_EN } from './en/translation';
import { TRANSLATIONS_HI } from './hi/translation';

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: TRANSLATIONS_EN,
		},
		hi: {
			translation: TRANSLATIONS_HI,
		},
	},
	lng: 'en',
});
