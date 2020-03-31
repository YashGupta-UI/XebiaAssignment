import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';
import renderer from 'react-test-renderer';

describe('NotFoundPage Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<NotFoundPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
