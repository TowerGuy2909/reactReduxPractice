const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DEINCREMENT'){
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADDFIVE'){
        return {
            counter: state.counter + action.val
        }
    }
    if (action.type === 'SUBTRACTFIVE'){
        return {
            counter: state.counter - action.val
        }
    }
    return state;
}

export default reducer;