import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import StateMD from './index.md'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export default class Stateful extends Component {
	componentDidMount() {
		document.querySelectorAll('pre code').forEach(block => {
			hljs.highlightBlock(block)
		})
	}
	render() {
		return (
			<>
				<ReactMarkdown source={StateMD} />
			</>
		)
	}
}
