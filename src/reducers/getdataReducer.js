import{GET_DATA_SUCCESS,GET_DATA_FAILURE} from '../constants/types';

const initialState ={};
export default function getdataReducer(state=initialState,action) {
    const message  = action.payload || '';
    console.log("data in getdata reducer");
    console.log(message);

    switch(action.type){
        case GET_DATA_SUCCESS:
            
            return {...state,success:true,message}
        case GET_DATA_FAILURE:
            return {...state,success:false,message}   
        default:
            return initialState

    }
}