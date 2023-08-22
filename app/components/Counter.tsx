"use client";

import { decrement, increment } from "@/redux/features/counterSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface CounterProps {
  counter: number;
}

const Counter: React.FC<CounterProps> = ({ counter }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Counter Value: {counter}</div>
      <button
        className="border-slate-300 bg-indigo-700 mr-4 outline-zinc-500"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default Counter;
