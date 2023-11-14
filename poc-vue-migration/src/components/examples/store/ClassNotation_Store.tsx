import { Component } from 'react';
import '../Props/Increment.scss';
import { increment, decrement, incrementByAmount } from '@/data/store/slices/counterSlice';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from '@/data/store/store';
import { PayloadAction } from '@reduxjs/toolkit';

// Properties that the component receives
interface iCompProps {
  // store state
  counter: { count: number };
  // store reducers
  increment: () => PayloadAction<number>;
  decrement: () => PayloadAction<number>;
  incrementByAmount: (num: number) => PayloadAction<number>;
}

// Component State Properties
interface iCompState {}

class ClassNotation_Store extends Component<iCompProps, iCompState> {
  onIncrementCount = () => {
    this.props.increment();
  };

  onDecrementCount = () => {
    this.props.decrement();
  };

  onIncrementBy = (num: number) => {
    this.props.incrementByAmount(num);
  };

  render() {
    return (
      <>
        <div className="card">
          <p>
            <code>/ClassNotation_Store.tsx</code>
          </p>
          <p>count {this.props.counter.count}</p>
          <button onClick={this.onIncrementCount}>+ 1</button>
          <button onClick={this.onDecrementCount}>- 1</button>
          <button onClick={() => this.onIncrementBy(10)}>+ 10</button>
          <button onClick={() => this.onIncrementBy(-10)}>- 10</button>
        </div>
      </>
    );
  }
}

// Redux: In a class component, access to the store is through mapped props (reducers y store values).
//? https://react-redux.js.org/using-react-redux/connect-mapstate

const mapStateToProps = (state: RootState, /* ownProps */) => {
  const { counter } = state;
  return { counter };
};
const mapDispatchToprops = (dispatch: AppDispatch) => {
  return { 
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (num: number) => dispatch(incrementByAmount(num)),
  };
};
// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToprops)(ClassNotation_Store);
