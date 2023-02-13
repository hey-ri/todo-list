import { useRef } from 'react';
import uuid from 'react-uuid';
import styles from './TodoInput.module.css';

export function TodoInput({ onItemAdded }) {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const text = e.target.task.value.trim();
    if (text.length === 0) return;
    onItemAdded({ text, id: uuid(), checked: false });
    console.log(text);
    e.target.task.value = '';
    inputRef.current.focus();
  };

  return (
    <div className="todo_input">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>할 일:</label>
          <input
            name="task"
            type="text"
            placeholder="할 일을 입력하세요"
            className={styles.todo_input_field}
            ref={inputRef}
          />
          <button type="submit" className={styles.add_btn}>
            +
          </button>
        </fieldset>
      </form>
    </div>
  );
}
