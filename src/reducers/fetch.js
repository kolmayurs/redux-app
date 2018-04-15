export default function fetch(state={
	fetching:false,
	fetched:false,
	data: [],
	error: null,
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
		default : {
			return state
		}
		
	}
}