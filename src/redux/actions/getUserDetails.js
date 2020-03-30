import * as types from './actionTypes';

export function getUserDetails() {
	return { type: types.GET_USER_DETAILS };
}

export function getUserDetailsSuccess(userdata) {
	return {
		type: types.GET_USER_DETAILS_SUCCESS,
		payload: userdata,
	};
}

export function getUserDetailsFailure(error) {
	return {
		type: types.GET_USER_DETAILS_FAILURE,
		payload: error,
	};
}

export function getUserData(url) {
	return function(dispatch) {
		dispatch(getUserDetails());
		return fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(response.statusText);
				}
			})
			.then(successdata => {
				dispatch(getUserDetailsSuccess(successdata));
			})
			.catch(error => {
				dispatch(getUserDetailsFailure(error));
				return error;
			});
	};
}
