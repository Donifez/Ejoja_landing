import {
	LOGIN_AUTH_PENDING,
	LOGIN_AUTH_FAILURE,
	LOGIN_AUTH_SUCCESS,
	SIGNUP_AUTH_PENDING,
	SIGNUP_AUTH_FAILURE,
	SIGNUP_AUTH_SUCCESS
} from '../actions/types';

import createReducer from './reducerCreator';


export const loginAuthReducer = createReducer(
	{
		loggedIn: false,
		loginAuthPending: false,
		loginError: '',
	},
	{
		[LOGIN_AUTH_PENDING]: state => ({ ...state, loginAuthPending: true, loginError: '' }),
		[LOGIN_AUTH_FAILURE]: state => ({
			...state,
			loginAuthPending: false,
			loginError: 'Could not Signup Successfully',
		}),
		[LOGIN_AUTH_SUCCESS]: state => ({ ...state, loginAuthPending: false, loginError: true, loggedIn: true }),
	}
);

export const signAuthReducer = createReducer(
	{
		signedUp: false,
		signUpPending: false,
		signUpError: '',
	},
	{
		[SIGNUP_AUTH_PENDING]: state => ({ ...state, signUpPending: true, signUpError: '' }),
		[SIGNUP_AUTH_FAILURE]: state => ({
			...state,
			signUpPending: false,
			signUpError: 'Could not signup successfully',
		}),
		[SIGNUP_AUTH_SUCCESS]: state => ({ ...state, signUpPending: false, signedUp: true }),
			}
);