import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Error } from '../../screens/error/Error'
import { useTranslation } from 'react-i18next'
import { setUserLanguage } from '../../redux/modules/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { MainRouter } from '../main/MainRouter'

const routes = [
	{
		path: '/',
		component: MainRouter
	}
]

const RouteConfig = () => {
	const { i18n } = useTranslation()
	const dispatch = useDispatch()
	const language = useSelector((state) => state.UserReducer.language)

	useEffect(() => {
		if (!language && i18n?.language) {
			dispatch(setUserLanguage(i18n?.language?.substring(0, 2)))
		}
	}, [language, i18n, i18n.language, dispatch])

	return (
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
				<Route>
					<Error code={500} />
				</Route>
			</Switch>
		</Router>
	)
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes} />
			)}
		/>
	)
}

export default RouteConfig
