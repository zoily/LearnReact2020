import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import moment from 'moment'
import 'moment/locale/fr'
import 'moment/locale/en-gb'
import 'moment/locale/hu'
import 'moment/locale/ro'
import 'moment/locale/nl'
import 'moment/locale/de'
import 'moment/locale/ug-cn'
import 'moment/locale/zh-cn'

export const FormatType = {
	DATE: 'date'
}

i18n
	// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		ns: ['dictionary'],
		defaultNS: 'dictionary',
		fallbackLng: 'en',
		debug: process.env.REACT_APP_ENABLE_LOG_TRANSLATION === 'true',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
			format: function (value, option) {
				return value
			}
		},
		backend: {
			loadPath: './locales/{{ns}}.{{lng}}.json'
		},
		react: {
			//bindI18n: 'languageChanged',
			//bindI18nStore: '',
			//transEmptyNodeValue: '',
			//transSupportBasicHtmlNodes: true,
			//transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
			useSuspense: false
		}
	})

i18n.on('languageChanged', function (lng) {
	moment.locale(lng)
})

export default i18n
