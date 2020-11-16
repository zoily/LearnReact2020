import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import MainReducer from './modules/main/mainReducer'

const rootReducer = combineReducers({ MainReducer /*, OtherReducer */ })

const middlewares = [thunk]
if (process.env.REACT_APP_ENABLE_LOG_REDUX === 'true') {
	middlewares.push(logger)
}

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
