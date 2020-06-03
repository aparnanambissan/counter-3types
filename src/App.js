import React from 'react';
import './App.css';
import Counter from './counter/counter';
import CounterHooks from './counter/counterHooks';
import CounterRedux from './counter/counterRedux';

function App() {
  return (
    <div className="App">
      Using Class Component:
      <Counter />
      Using Hooks:
      <CounterHooks />
      Using Redux:
      <CounterRedux />
    </div>
  );
}

export default App;
