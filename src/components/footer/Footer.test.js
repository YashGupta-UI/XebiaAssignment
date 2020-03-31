import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import renderer from 'react-test-renderer';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Footer />);
});

describe('Footer Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<Footer />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
