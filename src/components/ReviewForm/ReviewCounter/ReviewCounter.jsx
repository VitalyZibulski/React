import styles from './ReviewCounter.module.css';

export const ReviewCounter = ({ value, decrement, increment }) => {
    return (
        <div className={styles.counterAligner}>
            <button type="button" onClick={decrement}>-</button>
            <div>{value}</div>
            <button type="button" onClick={increment}>+</button>
        </div>
    );
};