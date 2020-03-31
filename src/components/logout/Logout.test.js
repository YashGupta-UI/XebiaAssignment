import React from 'react';
import { shallow } from 'enzyme';
import { Logout } from './Logout';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Logout Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer
			.create(
				<Router>
					<Logout />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
