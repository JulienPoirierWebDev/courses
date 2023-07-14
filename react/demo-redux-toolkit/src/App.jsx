import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/counter/counterSlice";

console.log(increment);

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>Compteur : {count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>-5</button>
      </div>
    </>
  );
}

export default App;
