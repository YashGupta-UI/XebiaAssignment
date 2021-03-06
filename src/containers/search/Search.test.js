import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Search Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer
			.create(
				<Router>
					<Search />
				</Router>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
