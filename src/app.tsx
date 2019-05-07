import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import ErrorBoundary from './components/error-boundary'
import routes from './routes'
import './index.css'

interface Props {
	color?: string
}
interface State {}

class App extends React.Component<Props, State> {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Suspense fallback={<div className="loading">loading...</div>}>
						<div id="typo-wrapper" className="typo">
							<Switch>
								{renderRoutes(routes as RouteConfig[])}
								<Redirect to="/404" />
							</Switch>
						</div>
					</Suspense>
				</Router>
				<style jsx global>
					{`
						html {
							background-color: #eee;
						}
						body {
							width: 90%;
							max-width: 960px;
							background: #fff;
							margin: 3em auto 0;
							border: 1px solid #ddd;
							border-width: 0 1px;
							box-sizing: border-box;
						}
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
						#typo-wrapper {
							padding: 1em 8% 8% 8%;
						}
					`}
				</style>
			</ErrorBoundary>
		)
	}
}

export default App
