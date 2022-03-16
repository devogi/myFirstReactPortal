import { useSelector } from "react-redux";
import counter from "../stores/counter";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return <div>{count}</div>;
}

export default Counter;
