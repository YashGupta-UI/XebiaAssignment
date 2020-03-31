import React, { Fragment } from 'react';
import { HEADING, DESCIPTION, START_SEARCH } from '../../appConstants/AppConstants';
import { withRouter } from 'react-router-dom';

export const Home = props => {
	function routeToSearch() {
		props.history.push('/search');
	}

	return (
		<Fragment>
			<h1>{HEADING}</h1>
			<h3>{DESCIPTION}</h3>
			<button onClick={routeToSearch} className="searcButton">
				{START_SEARCH}
			</button>
		</Fragment>
	);
};

export default withRouter(Home);
