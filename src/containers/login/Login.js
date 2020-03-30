import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../redux/actions/getUserDetails';
import { USERNAME, PASSWORD, INVALID_CREDENTIALS } from '../../appConstants/AppConstants';
import { logOutUser } from '../../redux/actions/logout';
import Home from '../../components/home/Home';
import Loader from 'react-loader';
import AuthError from '../../components/authError/AuthError';

class Login extends Component {
	state = {
		username: '',
		password: '',
		error: '',
		isLoading: false,
		isAuth: false,
	};

	resetData = () => {
		this.setState({
			username: '',
			password: '',
			error: '',
			isLoading: false,
			isAuth: false,
		});
		this.props.dispatch(logOutUser());
	};

	handleChange = evt => {
		const value = evt.target.value;
		const name = evt.target.name;
		this.setState({
			[name]: value,
		});
	};

	handleLogin = evt => {
		evt.preventDefault();
		const { username, password } = this.state;
		if (username === '' || password === '') {
			this.setState({ error: 'Please fill in both the fields' });
		} else {
			this.setState({
				isLoading: true,
				error: '',
			});
			let url = `https://swapi.co/api/people/?search=${username}`;
			this.props.dispatch(getUserData(url));
		}
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		// const {
		// 	userData: { userdata = {} },
		// } = nextProps;

		if (nextProps.userData && nextProps.userData.userdata && nextProps.userData.userdata.count > 0) {
			return {
				isAuth: true,
				isLoading: false,
				error: '',
			};
		}
		if (nextProps.userData && nextProps.userData.userdata && nextProps.userData.userdata.count === 0) {
			return {
				isLoading: false,
				error: INVALID_CREDENTIALS,
			};
		}

		return {
			isAuth: false,
			error: '',
		};
	}

	render() {
		const { username, password, error, isAuth, isLoading } = this.state;
		const inputDisabled = error ? true : false;
		return (
			<div>
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
				{!isAuth && (
					<div className="formClass">
						<form className="form" onSubmit={this.handleLogin} autoComplete="off">
							<p>
								<input
									className="userFields"
									required
									type="text"
									name="username"
									value={username}
									onChange={this.handleChange}
									placeholder={USERNAME}
									disabled={inputDisabled}
								/>
							</p>
							<br />
							<p>
								<input
									className="userFields"
									required
									type="password"
									name="password"
									value={password}
									onChange={this.handleChange}
									placeholder={PASSWORD}
									disabled={inputDisabled}
								/>
							</p>
							<p>
								<input
									className="userFields button"
									type="submit"
									value="Login"
									disabled={inputDisabled}
								/>
							</p>
						</form>
						{error && <AuthError handleResetError={this.resetData} error={error} />}
					</div>
				)}
				{isAuth && <Home />}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userData: state.userDetails,
	};
};

export default connect(mapStateToProps)(Login);
