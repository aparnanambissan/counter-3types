import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    handleIncrement = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }

    handleDecrement = () => {
        this.setState(prevState => ({counter: prevState.counter - 1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default Counter;