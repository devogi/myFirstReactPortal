import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../stores/counter";

function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}></button>
      <button onClick={() => dispatch(increment())}></button>
      <button onClick={() => dispatch(inc())}></button>
    </div>
  );
}

export default CounterActions;
