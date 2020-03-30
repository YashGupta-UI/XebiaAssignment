import React from 'react';
import { shallow } from 'enzyme';
import AuthError from './AuthError';
import renderer from 'react-test-renderer';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<AuthError />);
});

describe('AuthError', () => {
	it('Snapshot', () => {
		const tree = renderer.create(<AuthError />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should find all the divs', () => {
		expect(wrapper.find('div').length).toBe(1);
	});

	it('should find all the span nodes', () => {
		expect(wrapper.find('span').length).toBe(2);
	});
});
