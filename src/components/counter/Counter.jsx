import React from "react";
import styles from './Counter.module.css';

export const Counter = ({ value, decrement, increment }) => {
    return (
        <div className={styles.counterAligner}>
            <button type="button" onClick={decrement}>-</button>
            <div>{value}</div>
            <button type="button" onClick={increment}>+</button>
        </div>
    );
};