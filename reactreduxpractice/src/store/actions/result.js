import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            //simulating async calls like to a server
            dispatch(saveResult(res));
        },2000);
    };
   
    return 
}
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
}