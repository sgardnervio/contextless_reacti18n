import i18n from "i18next";
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	lng: 'en',
	debug: true,
	fallbackLng: 'en',
	resources: {
		en: {
			translation: {
				string1: 'I am a string of text from i18n resources',
				importedComponent: 'I am also a string of text to show in an imported component'
			}
		}
	}
})

export default i18n;