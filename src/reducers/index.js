import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import getdataReducer from './getdataReducer';

const rootReducer = combineReducers({
    fetchedentry:getdataReducer,
    itemresponse:itemReducer
})

export default rootReducer;