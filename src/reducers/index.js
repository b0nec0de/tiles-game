import * as actionTypes from '../constants/action-types';

const initialState = {
	counter: 0,
	tiles: []
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT_TRIES:
			return {
				...state,
				counter: state.counter + 1
			}
		case actionTypes.RESET_TRIES:
			return {
				...state,
				counter: 0,
				tiles: [...action.tiles]
			}
		default:
			return state
	}
}

export default rootReducer;
