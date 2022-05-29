import * as React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state.counter);
  };

  decrementCount = () => {
    this.setState({ counter: this.state.counter - 1 });
    console.log(this.state.counter);
  };

  render() {
    return (
      <div className="container">
        <h1>React State Example. - Class based Component</h1>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementCount}> Increment</button>
        <button onClick={this.decrementCount}> Decrement</button>
      </div>
    );
  }
}

export default Home;
