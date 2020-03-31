import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer
			.create(
				<Router>
					<Header />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
