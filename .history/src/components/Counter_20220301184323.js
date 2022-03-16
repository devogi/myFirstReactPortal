import React from "react";
import { useSelector } from "react-redux";
import counter from "../stores/counter";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      {counter}
    </div>
  );
}

export default Counter;
