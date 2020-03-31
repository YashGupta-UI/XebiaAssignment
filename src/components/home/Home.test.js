import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import renderer from 'react-test-renderer';
import { HEADING, DESCIPTION, START_SEARCH } from '../../appConstants/AppConstants';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<Home />);
});

describe('Home Component', () => {
	it('should render correctly snapshot', () => {
		const tree = renderer.create(<Home />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render h1 heading', () => {
		expect(wrapper.find('h1').length).toBe(1);
		expect(wrapper.find('h1').text()).toBe(HEADING);
	});

	it('should render h3 description', () => {
		expect(wrapper.find('h3').length).toBe(1);
		expect(wrapper.find('h3').text()).toBe(DESCIPTION);
	});
});
