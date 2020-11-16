import React from 'react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

export const withProvider = (story) => <Provider store={store}>{story()}</Provider>
export const withFont = (story) => <div className={'withFont'}>{story()}</div>
export const withCanvas = (story) => <div className={'canvas'}>{story()}</div>
export const withSlateComponent = (story) => (
	<div className={'component slate'}>{story()}</div>
)
