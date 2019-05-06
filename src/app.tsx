import React, { Suspense } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import ErrorBoundary from './components/error-boundary'
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
					<Suspense
						fallback={
							<>
								<div className="loading">loading...</div>
								<style jsx>{`
									div.loading {
										position: absolute;
										top: 0;
										right: 0;
										bottom: 0;
										left: 0;
										display: flex;
										justify-content: center;
										align-items: center;
										font-size: 20px;
										color: #1abc9c;
									}
								`}</style>
							</>
						}
					>
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
