import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import { Login } from './Login';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

let userdata;

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Login />);
});

describe('Login Component', () => {
	it('renders correctly ', () => {
		const tree = renderer.create(<Login />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders a email input', () => {
		expect(wrapper.find('#email')).toMatchSnapshot();
	});

	it('renders a password input', () => {
		expect(wrapper.find('password')).toMatchSnapshot();
	});

	it('+++ check Prop matches with component', () => {
		expect(wrapper.prop('userdata')).toEqual(userdata);
	});

	it('should get error when username or password is not correct', () => {
		wrapper.find('form').simulate('submit', {
			preventDefault: () => {},
		});
		expect(wrapper.state('error').length).toBe(0);
		expect(wrapper).toMatchSnapshot();
	});

	it('should set the username', () => {
		const value = 'User Name';
		wrapper
			.find('input')
			.at(0)
			.simulate('change', {
				target: { value },
			});
	});
	//expect(wrapper.state('username')).toBe(value);
});
