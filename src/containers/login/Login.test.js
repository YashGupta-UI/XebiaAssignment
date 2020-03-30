import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const title = 'Test Title';

let wrapped = shallow(<Login>{title}</Login>);

describe('Login', () => {
	it('should render the Login Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
});
