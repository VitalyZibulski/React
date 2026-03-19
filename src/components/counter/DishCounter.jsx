import React from "react";
import { useCounter } from "../hooks/useCounter.js";
import styles from './DishCounter.module.css';

export const DishCounter = () => {
    const { value, decrement, increment } = useCounter();

    return (
        <div className={styles.counterAligner}>
            <button onClick={decrement}>-</button>
            <div>{value}</div>
            <button onClick={increment}>+</button>
        </div>
    );
};