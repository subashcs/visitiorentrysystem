import {RESET_ADD_ITEM,GET_DATA,ADD_ENTRY, GET_ALL_DATA} from '../constants/types';

export const addEntry = (data)=>{
    console.log(data);
    return{
        type:ADD_ENTRY,
        payload:data
    }

}
export const resetAddItem = (data) => {
	return {
		type: RESET_ADD_ITEM,
		payload: data
	};
};

export const getData = () =>{
    return{
        type:GET_DATA,
        payload:''
    }
}
export const getAllData =()=>{
    return{
        type:GET_ALL_DATA,
        payload:''
    }
}