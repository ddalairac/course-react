
import '../Props/Increment.scss';
import { increment, decrement, incrementByAmount } from '@/data/store/slices/counterSlice';
// import { RootState } from '../../data/store/store';
import { 
  // useDispatch, 
  // useSelector, 
} from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';


const Functional_Store = () => {
  // ? Store hooks 

  // const { count } = useSelector((state: RootState) => state.counter);
  // const dispatch = useDispatch();

  //? Custom store typed hooks (no need to add the store type)

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  /* Event methods */
  function onIncrementCount() {
    dispatch(increment());
  }
  function onDecrementCount() {
    dispatch(decrement());
  }
  function onIncrementBy(num:number) {
    dispatch(incrementByAmount(num));
  }

  return (
    <>
      <div className="card">
        <p>
          <code>/Functional_Store.tsx</code>
        </p>
        <p>count {count}</p>
        <button onClick={onIncrementCount}>+ 1</button>
        <button onClick={onDecrementCount}>- 1</button>
        <button onClick={()=>onIncrementBy(10)}>+ 10</button>
        <button onClick={()=>onIncrementBy(-10)}>- 10</button>
      </div>
    </>
  );
};

export default Functional_Store;
