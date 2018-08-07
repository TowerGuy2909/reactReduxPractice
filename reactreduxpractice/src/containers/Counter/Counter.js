import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0,
        results: []
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDeincrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.subtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        <li key={strResults.id} onClick={() =>this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDeincrementCounter: () => dispatch({type: 'DEINCREMENT'}),
        addCounter: () => dispatch({type: 'ADD', val: 10}),
        subtractCounter: () => dispatch({type: 'SUBTRACT', val: 15}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT', }),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);