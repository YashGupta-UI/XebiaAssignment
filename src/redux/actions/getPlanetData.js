import * as types from '../actions/actionTypes';

export function getPlanetDataTypes() {
	return { type: types.GET_PLANET_DATA };
}

export function getPlanetOnSuccess(planetdata) {
	return {
		type: types.GET_PLANET_DATA_SUCCESS,
		payload: planetdata,
	};
}

export function getPlanetOnFailure(error) {
	return {
		type: types.GET_PLANET_DATA_FAILURE,
		payload: error,
	};
}

export function getPlanetData(url) {
	return function(dispatch) {
		dispatch(getPlanetDataTypes());
		return fetch(url)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(response.statusText);
				}
			})
			.then(findresponse => {
				dispatch(getPlanetOnSuccess(findresponse));
			})
			.catch(error => {
				dispatch(getPlanetOnFailure(error));
				return error;
			});
	};
}
