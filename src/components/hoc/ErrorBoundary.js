import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		error: null,
		errorInfo: null,
	};

	componentDidCatch(error, info) {
		this.setState({
			error: error,
			errorInfo: info,
		});
	}

	render() {
		const { error } = this.state;
		if (error) {
			return <div>An error has occured in Buggy component!</div>;
		}
		return <div>{this.props.children}</div>;
	}
}

export default ErrorBoundary;
