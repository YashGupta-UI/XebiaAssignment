import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import Login from './Login';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

const initialState = {
	userdata: null,
	error: false,
};

let userdata;

const mockStore = configureStore();
let store, wrapper;

const state = {
	username: '',
	password: '',
	error: '',
	isLoading: false,
	isAuth: false,
};

beforeEach(() => {
	store = mockStore(initialState);
	wrapper = shallow(
		<Provider store={store}>
			<Login />
		</Provider>
	);
});

describe('Login Component', () => {
	it('renders correctly ', () => {
		const tree = renderer
			.create(
				<Provider store={store}>
					<Login />
				</Provider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders a email input', () => {
		expect(wrapper.find('#email')).toMatchSnapshot();
	});

	it('renders a password input', () => {
		expect(wrapper.find('password')).toMatchSnapshot();
	});

	it('should check the wrapped length', () => {
		expect(wrapper.find(Login).length).toBe(1);
	});

	it('+++ check Prop matches with component', () => {
		expect(wrapper.prop('userdata')).toEqual(userdata);
	});
});
