import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions/counter';

class CounterRedux extends Component {
    static mapStateToProps = state => {
        return {
            count: state.count
        }
    }

    static mapDispatchToProps = dispatch => {
        return bindActionCreators({
            increment, decrement
        }, dispatch)
    }

    render() {
        const { increment, decrement } = this.props;
        return (
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default connect(CounterRedux.mapStateToProps, CounterRedux.mapDispatchToProps)(CounterRedux);