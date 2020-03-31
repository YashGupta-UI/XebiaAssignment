import React from 'react';
import { connect } from 'react-redux';
import { getPlanetData } from '../../redux/actions/getPlanetData';
import { PLANET_DESCRIPTION } from '../../appConstants/AppConstants';
import PlanetData from '../../components/PlanetSearch/PlanetData';
import { Redirect } from 'react-router-dom';

export class Search extends React.Component {
	state = {
		value: '',
		isLoading: false,
		error: null,
		items: [],
		selectedData: [],
	};

	handleInputChange = () => {
		if (this.search.value === '') {
			this.reset();
		} else {
			this.setState(
				{
					value: this.search.value,
				},
				() => {
					this.fetchData(this.search.value);
				}
			);
		}
	};

	handleClick = item => {
		this.setState({ selectedData: item });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const { planetdata } = nextProps;

		if (planetdata && planetdata.planetdata && planetdata.planetdata.count) {
			return {
				items: planetdata.planetdata.results,
				isLoading: false,
				error: '',
			};
		} else {
			return {
				items: [],
				isLoading: false,
				error: '',
			};
		}
	}

	fetchData(id) {
		let url = `https://swapi.co/api/planets/?search=${id}`;
		this.props.dispatch(getPlanetData(url));
	}

	reset = () => {
		this.setState({ selectedData: [], items: [] });
	};

	render() {
		const { error, items, selectedData } = this.state;

		const { userData } = this.props;

		if (userData && userData.userdata) {
			if (error) {
				return <div>Error: {this.state.error}</div>;
			} else if (Object.keys(selectedData).length) {
				return <PlanetData selectedData={selectedData} handleReset={this.reset} />;
			} else {
				return (
					<div>
						<form className="searchPlanet">
							<input
								className="searchBox"
								placeholder="Search Planets..."
								ref={input => (this.search = input)}
								onChange={this.handleInputChange}
							/>
							<br />
							<span className="planetDescription">{PLANET_DESCRIPTION}</span>
						</form>

						<div className="showResult">
							<ul>
								{items
									.sort((a, b) => b.population - a.population)
									.map((item, idx) => (
										<li key={item.name} onClick={this.handleClick.bind(this, item)}>
											<div style={{ fontSize: 20 - idx }}>
												{item.name} <br />
											</div>
										</li>
									))}
							</ul>
						</div>
					</div>
				);
			}
		} else {
			return <Redirect to="/" />;
		}
	}
}

const mapStateToProps = state => {
	return {
		userData: state.userDetails,
		planetdata: state.getPlanetInfo,
		error: state.getPlanetInfo,
	};
};

export default connect(mapStateToProps)(Search);
