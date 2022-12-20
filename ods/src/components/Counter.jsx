import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increment5Handler = () => {
    dispatch({ type: "increment5", amount: 5 });
  };

  return (
    <div>
      <button onClick={incrementHandler} />
      <button onClick={increment5Handler} />
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
