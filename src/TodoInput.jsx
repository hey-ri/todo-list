import uuid from 'react-uuid';
import styles from './TodoInput.module.css';

export function TodoInput({ onItemAdded }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded({ text: e.target.task.value, id: uuid(), checked: false });
    console.log(e.target.task.value);
    e.target.task.value = '';
  };

  return (
    <div className="todo_input">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>할 일:</label>
          <input name="task" type="text" placeholder="할 일을 입력하세요" className={styles.todo_input_field} />
        </fieldset>
      </form>
    </div>
  );
}
