import { useSelector, useDispatch } from 'react-redux';
import Button from '../src/components/Button';

export const Counter = () => {
  const count = useSelector(({ counter }: any) => counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <Button text="ADD" click={() => dispatch({ type: 'ADD' })}></Button>
      <Button
        text="SUBTRACT"
        click={() => dispatch({ type: 'SUBTRACT' })}
      ></Button>
    </div>
  );
};

export default Counter;
