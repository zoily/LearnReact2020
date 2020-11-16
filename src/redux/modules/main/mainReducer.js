const initialState = {
	mail: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_MAIL':
			return {
				...state,
				mail: action.payload
			}
		default:
			return state
	}
}
