import i18n from './../src/utils/translation/i18n'
import { addDecorator } from '@storybook/react'
import { withI18next } from 'storybook-addon-i18next'
import { withProvider, withFont } from './decorators'
import { withTests } from '@storybook/addon-jest'

import results from '../src/utils/test/.jest-test-results.json'

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			// array of plain string values or MenuItem shape (see below)
			items: ['light', 'dark']
		}
	}
}

export const parameters = {
	layout: 'padded',
	actions: { argTypesRegex: '^on.*' }
}

export const decorators = [
	withTests({
		results
	}),
	withProvider,
	withI18next({
		i18n,
		languages: {
			en: 'English',
			fr: 'Francais',
			hu: 'Hongrois',
			ro: 'Roumain',
			nl: 'Néerlandais',
			de: 'Allemand',
			cn: 'Chinois Simplifié'
		}
	}),
	withFont
]
