import React from 'react';
import { shallow } from 'enzyme';
import AuthError from './AuthError';
import renderer from 'react-test-renderer';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<AuthError />);
});

describe('AuthError Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<AuthError />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render div', () => {
		expect(wrapper.find('div').length).toBe(1);
	});

	it('should render span ', () => {
		expect(wrapper.find('span').length).toBe(2);
	});
});
