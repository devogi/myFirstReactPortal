import { useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../stores/counter";

function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() =>}>Arttır</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>1k arttır</button>
    </div>
  );
}

export default CounterActions;
