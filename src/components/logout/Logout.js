import React from 'react';
import { logOutUser } from '../../redux/actions/logout';
import { connect } from 'react-redux';
import { LOGGED_OUT, LOGIN_IN_AGAIN } from '../../appConstants/AppConstants';

const Logout = props => {
	function routeLogin() {
		props.dispatch(logOutUser());
		props.history.push('/');
	}

	return (
		<div>
			<h3>{LOGGED_OUT}</h3>
			<button className="searcButton" onClick={routeLogin}>
				{LOGIN_IN_AGAIN}
			</button>
		</div>
	);
};

export default connect()(Logout);
