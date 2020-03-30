import React from 'react';
import { shallow } from 'enzyme';
import PlanetData from './PlanetData';
import renderer from 'react-test-renderer';

let wrapper;

const selectedData = {
	name: '',
	climate: '',
	rotation_period: '',
	orbital_period: '',
	diameter: '',
	gravity: '',
	terrain: '',
	surface_water: '',
	population: '',
};

const handleReset = jest.fn();

beforeEach(() => {
	wrapper = shallow(<PlanetData selectedData={selectedData} handleReset={handleReset} />);
});

describe('Login', () => {
	it('renders correctly when there are no items', () => {
		const tree = renderer.create(<PlanetData selectedData={selectedData} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should check whether wrapper is defined or not', () => {
		expect(wrapper).toBeDefined();
	});

	it('should find all the divs', () => {
		expect(wrapper.find('div').length).toBe(2);
	});

	it('should find all the b nodes', () => {
		expect(wrapper.find('b').length).toBe(9);
	});
});
