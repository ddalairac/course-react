import { Component } from 'react';
import './Increment.scss';

// Properties that the component receives
interface iCompProps {
  someNumber: number;
}

// Component State Properties
interface iCompState {
  count: number;
}

// React Life cycles
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export default class ClassNotation_Prop extends Component<iCompProps, iCompState> {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
  }

  /** Invoked immediately after a component is mounted (inserted into the tree). 
   * Initialization that requires DOM nodes should go here. 
   * Good place to instantiate the network request. 
  //? async componentDidMount() {} */

  /** Invoked immediately after updating occurs. 
   * This method is not called for the initial render. 
   * Used to compare new value with previous value of props
  //? componentDidUpdate(prevProps, prevState){} 
  */

  /** Invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup: listeners, timers, network requests, or subscriptions
  //? componentWillUnmount(){} */

  /** Used for optimization purpose (Rarely Used)
  //? https://es.react.dev/reference/react/Component#defining-a-class-component
  */

  /** component will re-render (use inside a method)
  //? this.forceUpdate() 
  */


  // Store the component states to be modified by setState
  state = { count: this.props.someNumber || 0 };

  onIncrementCount = () => {
    // setState repace useState hook in class notation
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  onIncrementBy = (num: number) => {
    this.setState((prevState) => ({ count: prevState.count + num }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <div className="card">
          <p>
            <code>/ClassNotation_Prop.tsx</code>
          </p>
          <p>count {count}</p>
          <button onClick={this.onIncrementCount}>+ 1</button>
          <button onClick={this.onDecrementCount}>- 1</button>
          <button onClick={() => this.onIncrementBy(10)}>+ 10</button>
          <button onClick={() => this.onIncrementBy(-10)}>- 10</button>
        </div>
      </>
    );
  }
}
