import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainScreen } from '../main/MainScreen'

const routes = [
	{
		path: '/',
		component: MainScreen
	}
]

const RouteConfig = () => {
	return (
		<Router>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
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
