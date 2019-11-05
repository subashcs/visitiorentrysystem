import { call, put } from 'redux-saga/effects';
import { SERVER } from '../../constants';
import {ADD_ENTRY_FAILURE, ADD_ENTRY_SUCCESS} from '../../constants/types';
import axios from 'axios';

export function* addEntry(action) {
	const response = yield call(axios.post, `${SERVER}/putData`, action.payload);
	if (response.data.success) {
		console.log("success");
		console.log(response.data);
		yield put({ type: ADD_ENTRY_SUCCESS, payload: response.data });
	} else {
		console.log("failure")
		yield put({ type: ADD_ENTRY_FAILURE, payload: response.data });
	}
}
