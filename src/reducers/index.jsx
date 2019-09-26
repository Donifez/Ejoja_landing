import { combineReducers } from 'redux';

import {loginAuthReducer, signAuthReducer } from './basicReducer';


export default combineReducers({
	loginAuthReducer, signAuthReducer 
});

