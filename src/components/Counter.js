import React from 'react';
import {connect} from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends React.Component {

    increment = () => {
        // OLD WAY WITH MAHUAL ACTIONS
        // this.props.dispatch({type: "INCREMENT"})

        // NEW WAY WITH CALLING ACTION CREATOR
        // this.props.dispatch(increment())

        // NEW WAY UTILIZING ACTION CREATOR THROUGH mapDispatchToProps
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    reset = () => {
        // this.props.dispatch({type: "RESET"})
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                    {/* <button onClick={this.reset}>Reset</button> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

const mapDispatchToProps = {
    increment, 
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)