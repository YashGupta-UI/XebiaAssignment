import { combineReducers } from 'redux';
import userDetails from '../reducers/userDetails';
import getPlanetInfo from '../reducers/planetData';

export const rootReducer = combineReducers({ userDetails, getPlanetInfo });
