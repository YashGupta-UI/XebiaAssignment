import React from 'react';
import { HEADING, DESCIPTION, START_SEARCH } from '../../appConstants/AppConstants';
import { withRouter } from 'react-router-dom';

const Home = props => {
	function routeToSearch() {
		props.history.push('/search');
	}

	return (
		<div>
			<h1>{HEADING}</h1>
			<h3>{DESCIPTION}</h3>
			<button onClick={routeToSearch} className="searcButton">
				{START_SEARCH}
			</button>
		</div>
	);
};

export default withRouter(Home);
