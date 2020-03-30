import React from 'react';
import { connect } from 'react-redux';
import { getPlanetData } from '../../redux/actions/getPlanetData';
import Loader from 'react-loader';
import { PLANET_DESCRIPTION } from '../../appConstants/AppConstants';
import PlanetData from '../../components/PlanetSearch/PlanetData';

class Search extends React.Component {
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

		if (planetdata && planetdata.count) {
			return {
				items: nextProps.planetdata.results,
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
		const { error, isLoading, items, selectedData } = this.state;

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
					<Loader
						loaded={!isLoading}
						lines={13}
						length={20}
						width={10}
						radius={30}
						corners={1}
						rotate={0}
						direction={1}
						color="#000"
						speed={1}
						trail={60}
						shadow={false}
						hwaccel={false}
						className="spinner"
						zIndex={2e9}
						top="50%"
						left="50%"
						scale={1.0}
						loadedClassName="loadedContent"
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		planetdata: state.getPlanetInfo.planetdata,
		error: state.getPlanetInfo.error,
	};
};

export default connect(mapStateToProps)(Search);
