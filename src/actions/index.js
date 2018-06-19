import * as actionTypes from '../constants/action-types';
import { combineContent } from '../data/index';


export const incrementTries = () => {
	return {
		type: actionTypes.INCREMENT_TRIES
	}
};

export const resetTries = () => {
	let tiles = combineContent();
	return {
		type: actionTypes.RESET_TRIES,
		tiles: tiles
	}
};
