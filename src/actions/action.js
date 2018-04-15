import axios from 'axios';

export function fetchData(){
	return function(dispatch){
		dispatch({type: 'FETCH_USER_START'})
		axios.get('http://product-server.herokuapp.com/products')
		.then(res => {
			dispatch({type: 'RECEIVE_USERS', payload:res.data.data})
		})
		.catch((err) => {
			dispatch({type: 'FETCH_USER_ERROR', payload: err })
		})
	}
}

export function increment(){
	return function(dispatch){
		dispatch({type: 'INCREMENT'})
	}
}

export function decrement(){
	return function(dispatch){
		dispatch({type: 'DECREMENT'})
	}
}