import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //simulating async calls like to a server
            // const oldCounter = getState().counter;
            // console.log(oldCounter);
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