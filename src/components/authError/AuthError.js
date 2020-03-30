import React from 'react';

const AuthError = ({ handleResetError, error }) => {
	return (
		<div className="errorPage">
			<span className="removeError" onClick={handleResetError}>
				X
			</span>
			<span>{error}</span>
		</div>
	);
};

export default AuthError;
