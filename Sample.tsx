import * as React from 'react';
import './style.css';

// Using normal function
export default function Sample() {
  let counter = 0;
  const incrementCount = () => {
    counter = counter + 1;
    console.log(counter);
  };

  const decrementCount = () => {
    counter = counter - 1;
    console.log(counter);
  };
  return (
    <div className="container">
      <h1>Simple - Functional based Component</h1>
      <h1>{counter}</h1>
      <button onClick={incrementCount}> Increment</button>
      <button onClick={decrementCount}> Decrement</button>
    </div>
  );
}
