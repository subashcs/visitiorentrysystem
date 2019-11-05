import {
	ADD_ENTRY_SUCCESS,
	ADD_ENTRY_FAILURE,
	RESET_ADD_ITEM
} from '../constants/types';

let initialState = {};

export default function itemReducer(state = initialState, action) {
	const { message } = action.payload || '';
	console.log("data in the item reducer");
	console.log(message);
	
	switch (action.type) {
		case ADD_ENTRY_SUCCESS:
			return { ...state, success: true, message };

		case ADD_ENTRY_FAILURE:
			return { ...state, success: false, message };
		case RESET_ADD_ITEM:
			return initialState;

		default:
			return initialState;
	}
}
