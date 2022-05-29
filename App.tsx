import * as React from 'react';
import './style.css';

// State Management using functional Component
// State Management using Class Component --->
export default function App() {
  const [counter, setCount] = React.useState(0);
  const incrementCount = () => {
    setCount(counter + 1);
    console.log(counter);
  };

  const decrementCount = () => {
    setCount(counter - 1);
    console.log(counter);
  };
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={incrementCount}> Increment</button>
      <button onClick={decrementCount}> Decrement</button>
    </div>
  );
}
