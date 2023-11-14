import { useState } from 'react';
import './Increment.scss';

// Properties that the component receives
interface iIncremenProps {
  someNumber: number;
}

const Functional_Prop = ({ someNumber }: iIncremenProps) => {
  const [count, setCount] = useState(someNumber || 0);

  function onIncrementCount() {
    setCount((count) => count + 1);
  }

  function onDecrementCount() {
    setCount((count) => count - 1);
  }

  function onIncrementBy(num: number) {
    setCount((count) => count + num);
  }

  return (
    <>
      <div className="card">
        <p>
          <code>/Functional_Prop.tsx</code>
        </p>
        <p>count {count}</p>
        <button onClick={onIncrementCount}>+ 1</button>
        <button onClick={onDecrementCount}>- 1</button>
        <button onClick={() => onIncrementBy(10)}>+ 10</button>
        <button onClick={() => onIncrementBy(-10)}>- 10</button>
      </div>
    </>
  );
};

export default Functional_Prop;
