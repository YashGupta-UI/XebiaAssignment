import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HOME, SEARCH, LOGIN, LOGOUT } from '../../appConstants/AppConstants';

export class Header extends Component {
	state = {
		isAuth: false,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const { userData } = nextProps;

		if (userData && userData.userdata && userData.userdata.count > 0) {
			return {
				isAuth: true,
			};
		}
		return {
			isAuth: false,
		};
	}

	render() {
		const { isAuth } = this.state;
		const navLinkClass = isAuth ? 'nav-link-auth' : 'nav-link';
		return (
			<header>
				<div>
					<nav id="myNavbar" className="navbar navbar-inverse" role="navigation">
						<div className="container">
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav">
									<li>
										<NavLink id="home" className={navLinkClass} to="/">
											{HOME}
										</NavLink>
									</li>
									<li>
										<NavLink id="search" className={navLinkClass} to="/search">
											{SEARCH}
										</NavLink>
									</li>
								</ul>
								{isAuth ? (
									<ul className="nav navbar-nav navbar-right">
										<li>
											<NavLink id="logout" className={navLinkClass} to="/logout">
												{LOGOUT}
											</NavLink>
										</li>
									</ul>
								) : (
									<ul className="nav navbar-nav navbar-right">
										<li>
											<NavLink id="login" to="/">
												{LOGIN}
											</NavLink>
										</li>
									</ul>
								)}
							</div>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}

const mapStateToProps = state => {
	return {
		userData: state.userDetails,
	};
};

export default connect(mapStateToProps)(Header);
