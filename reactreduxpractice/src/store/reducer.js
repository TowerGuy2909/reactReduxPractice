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
            counter: state.counter + 5
        }
    }
    if (action.type === 'SUBTRACTFIVE'){
        return {
            counter: state.counter - 5
        }
    }
    return state;
}

export default reducer;