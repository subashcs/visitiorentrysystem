import { takeEvery } from 'redux-saga/effects';
import { addEntry} from './additems/index';
import {getData,getAllData} from './getitems/index';
import {GET_DATA,ADD_ENTRY,GET_ALL_DATA} from '../constants/types';
export default function* rootsaga() {
	yield takeEvery(ADD_ENTRY,addEntry);
	yield takeEvery(GET_DATA,getData);
	yield takeEvery(GET_ALL_DATA,getAllData);
}
