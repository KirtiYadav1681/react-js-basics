import React, {useContext} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { increase, decrease, reset } from "../redux/action";
import themeContext from '../context/themeContext';

const ReduxCounter = () => {
  const theme = useContext(themeContext)
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid red", backgroundColor: theme === "dark" ? "#141414" : "white", color: "white",padding:"20px" }}>
        <h1>Redux Counter</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increase())}>Increment</button>
    </div>
  )
}

export default ReduxCounter