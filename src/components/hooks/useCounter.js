import { useState } from 'react';

export const useCounter = ({ min = 0, max = 5} = {}) => {
    const [count, setCount] = useState(min);

    const increment = () => {
        setCount((prev) => (prev >= max ? prev : prev + 1));
    };

    const decrement = () => {
        setCount((prev) => (prev <= min ? prev : prev - 1));
    };

    return {
        value: count,
        increment,
        decrement,
    };
};