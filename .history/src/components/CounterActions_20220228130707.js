import React from "react";
import { useDispatch } from "react-redux";
import { decrement, incrementByAmount } from "../stores/counter";

function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(incrementByAmount())}></button>
    </div>
  );
}

export default CounterActions;
