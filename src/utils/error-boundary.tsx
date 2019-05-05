import React, { Component, ErrorInfo } from 'react'

type State = {
	hasError: boolean
}

type Props = {}

type Info = {}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: object) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// You can also log the error to an error reporting service
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <h1>Something went wrong.</h1>
		}

		return this.props.children
	}
}
