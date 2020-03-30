import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/hoc/ErrorBoundary';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/reducers/index';
import AppRouter from './router/Router';
import './styles/styles.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<ErrorBoundary>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</ErrorBoundary>,
	document.getElementById('root')
);
