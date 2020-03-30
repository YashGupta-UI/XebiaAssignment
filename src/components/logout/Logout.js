import React from 'react';
import { logOutUser } from '../../redux/actions/logout';
import { connect } from 'react-redux';
import { LOGGED_OUT, LOGIN_IN_AGAIN } from '../../appConstants/AppConstants';
import { Redirect } from 'react-router-dom';

const Logout = props => {
	function routeLogin() {
		props.dispatch(logOutUser());
		props.history.push('/');
	}

	if (props.userData && props.userData.userdata) {
		return (
			<div>
				<h3>{LOGGED_OUT}</h3>
				<button className="searcButton" onClick={routeLogin}>
					{LOGIN_IN_AGAIN}
				</button>
			</div>
		);
	} else {
		return <Redirect to="/" />;
	}
};

const mapStateToProps = state => {
	return {
		userData: state.userDetails,
	};
};

export default connect(mapStateToProps)(Logout);
