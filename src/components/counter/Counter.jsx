import React from "react";
import { useCounter } from "../hooks/useCounter.js";
import './counter.css';

export const Counter = () => {
    const { value, decrement, increment } = useCounter();

    return (
        <div className="counter-wrapper">
            <button onClick={decrement}>-</button>
            <div>{value}</div>
            <button onClick={increment}>+</button>
        </div>
    );
};