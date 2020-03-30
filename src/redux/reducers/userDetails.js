import * as types from '../actions/actionTypes';

let initialState = {
	userdata: null,
	error: false,
};

export default function userDetails(state = initialState, action) {
	switch (action.type) {
		case types.GET_USER_DETAILS:
			return {
				userdata: {},
				error: false,
			};
		case types.GET_USER_DETAILS_SUCCESS:
			return {
				userdata: action.payload,
				error: false,
			};
		case types.GET_USER_DETAILS_FAILURE:
			return {
				userdata: {},
				error: true,
			};
		case types.LOGOUT_USER:
			return {
				userdata: {},
				error: false,
			};
		default:
			return state;
	}
}
