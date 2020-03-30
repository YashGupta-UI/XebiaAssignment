import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../containers/header/Header';
import Footer from '../components/footer/Footer';
import Login from '../containers/login/Login';
import Search from '../containers/search/Search';
import Logout from '../components/logout/Logout';
import NotFoundPage from '../components/notfoundpage/NotFoundPage';

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/search" exact component={Search} />
						<Route path="/logout" exact component={Logout} />
						<Route component={NotFoundPage} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default AppRouter;
