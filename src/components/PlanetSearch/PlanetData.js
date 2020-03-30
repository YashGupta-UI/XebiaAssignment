import React, { Fragment } from 'react';
import {
	NAME,
	CLIMATE,
	ROTATION_PERIOD,
	ORBITAL_PERIOD,
	DIAMETER,
	GRAVITY,
	TERRAIN,
	SURFACE_WATER,
	POPULATION,
	GO_BACK,
} from '../../appConstants/AppConstants';

const PlanetData = ({ selectedData, handleReset }) => {
	return (
		<Fragment>
			<div className="result">
				<b>{NAME}</b>
				{selectedData.name} <br />
				<b>{CLIMATE}</b>
				{selectedData.climate} <br />
				<b>{ROTATION_PERIOD}</b> {selectedData.rotation_period} <br />
				<b>{ORBITAL_PERIOD}</b> {selectedData.orbital_period} <br />
				<b>{DIAMETER}</b> {selectedData.diameter} <br />
				<b>{GRAVITY} </b>
				{selectedData.gravity} <br />
				<b>{TERRAIN}</b>
				{selectedData.terrain} <br />
				<b>{SURFACE_WATER}</b>
				{selectedData.surface_water} <br />
				<b>{POPULATION}</b>
				{selectedData.population} <br />
			</div>
			<div className="goBackButton" onClick={handleReset}>
				{GO_BACK}
			</div>
		</Fragment>
	);
};

export default PlanetData;
