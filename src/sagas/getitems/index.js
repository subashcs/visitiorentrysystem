import { call, put } from 'redux-saga/effects';
import { SERVER } from '../../constants';
import {GET_DATA_FAILURE, GET_DATA_SUCCESS} from '../../constants/types';
import axios from 'axios';

export function* getData(action) {
	const response = yield call(axios.post, `${SERVER}/getTodaysData`, action.payload);
	if (response.data.success) {
		console.log("successfully received data");
		console.log(response.data.entries);
		yield put({ type: GET_DATA_SUCCESS, payload: response.data.entries });
	} else {
		console.log("failure")
		yield put({ type: GET_DATA_FAILURE, payload: response.data });
	}
}

export function* getAllData(action){
	const response = yield call(axios.post, `${SERVER}/getAllData`, action.payload);
	if (response.data.success) {
		console.log("successfully received all data");
		console.log(response.data.entries);
		yield put({ type: GET_DATA_SUCCESS, payload: response.data.entries });
	} else {
		console.log("failure")
		yield put({ type: GET_DATA_FAILURE, payload: response.data });
	}
}
