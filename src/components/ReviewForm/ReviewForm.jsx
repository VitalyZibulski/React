import { useReducer } from 'react';
import { Counter } from '../counter/Counter';
import styles from './ReviewForm.module.css';
import { formReducer } from './reducers/formReducer';
import { INITIAL_FORM } from './reducers/formReducer';

const SET_USER_NAME_ACTION = 'setUserNameAction';
const SET_REVIEW_TEXT_ACTION = 'setReviewTextAction';
const SET_MARK_ACTION = 'setMarkAction';
const CLEAR_FORM_ACTION = 'clearFormAction';

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(formReducer, INITIAL_FORM);

  const { userName, reviewText, mark } = form;

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.reviewForm}>
      <label htmlFor="userName">Name</label>
      <input
        id="userName"
        value={userName}
        onChange={(event) => {
          dispatch({
            type: SET_USER_NAME_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <label htmlFor="reviewText">Review</label>
      <textarea
        id="reviewText"
        value={reviewText}
        onChange={(event) => {
          dispatch({
            type: SET_REVIEW_TEXT_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <p>Assesed from 1 to 5</p>

      <Counter
        value={mark}
        increment={() => {
          dispatch({ type: SET_MARK_ACTION, payload: 'increment' });
        }}
        decrement={() => {
          dispatch({ type: SET_MARK_ACTION, payload: 'decrement' });
        }}
      />

      <button
        onClick={() => dispatch({ type: CLEAR_FORM_ACTION})}
      >
        Clear
      </button>
    </form>
  );
};