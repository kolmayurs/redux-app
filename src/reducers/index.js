import { combineReducers } from 'redux';
import fetch from './fetch';
import counter from './counter';

export default combineReducers({
	fetch,
	counter
})

/*export default function fetch(state={
	fetching:false,
	fetched:false,
	data: [],
	error: null,
	value: 0
}, action){
	// eslint-disable-next-line
	switch(action.type){
		case 'FETCH_USER_START' : {
			return {...state, fetching: true }
		}
		case 'FETCH_USER_ERROR' : {
			return {...state, fetching: false, error: action.payload}
		}
		case 'RECEIVE_USERS' : {
			return {...state, fetching:false, fetched: true, data: action.payload}
		}
		case 'INCREMENT' : {
			return {...state, value: state.value+1}
		}
		case 'DECREMENT' : {
			return {...state, value: state.value-1}
		}
		
	}
	return state
} */
/*export default function reducers(state={
	fetching:false,
	fetched:false,
	data: [],
	error: null
}, action){
	// eslint-disable-next-line
	switch(action.type){
		case 'FETCH_USER_START' : {
			return {...state, fetching: true }
		}
		case 'FETCH_USER_ERROR' : {
			return {...state, fetching: false, error: action.payload}
		}
		case 'RECEIVE_USERS' : {
			return {...state, fetching:false, fetched: true, data: action.payload}
		}
		
	}
	return state
}*/