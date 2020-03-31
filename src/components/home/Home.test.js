import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import renderer from 'react-test-renderer';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Home />);
});

describe('Home Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
