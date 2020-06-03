import React, { useState } from 'react';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    
        return (
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                <p>{counter}</p>
            </div>
        )
    
}

export default Counter;