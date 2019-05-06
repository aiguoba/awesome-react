import React, { lazy, Suspense } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import ErrorBoundary from './utils/error-boundary'
import { RouteConfig } from 'react-router-config'
import routes from './routes'
import './index.css'

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Suspense fallback={'加载中...'}>
						<Switch>
							{renderRoutes(routes as RouteConfig[])}
							<Redirect to="/404" />
						</Switch>
					</Suspense>
				</Router>
			</ErrorBoundary>
		)
	}
}

export default App
