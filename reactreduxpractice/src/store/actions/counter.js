import * as actionTypes from './actionsTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}
export const deincrement = () => {
    return {
        type: actionTypes.DEINCREMENT
    }
}
export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
}
export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
}