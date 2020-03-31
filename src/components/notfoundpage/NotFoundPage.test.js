import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';
import renderer from 'react-test-renderer';
import { PAGE_NOT_FOUND } from '../../appConstants/AppConstants';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<NotFoundPage />);
});

describe('NotFoundPage Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<NotFoundPage />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render div', () => {
		expect(wrapper.find('div').length).toBe(1);
		expect(wrapper.find('div').text()).toBe(PAGE_NOT_FOUND);
	});
});
