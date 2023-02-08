import { useState } from 'react';
import styles from './TodoItem.module.css';

export function TodoItem({ todo, onTodoRemoved, onTodoChanged }) {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.text);

  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
  };

  const onEditTodo = () => {
    setIsEditTodo(true);
    setNewTodo(todo.text);
  };

  const onEditTodoInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (todo) => {
    todo.text = newTodo;
    onTodoChanged(todo);
    setNewTodo('');

    setIsEditTodo(false);
  };

  return (
    <div className={styles.todo_item_field}>
      <input type="checkbox" checked={todo.checked} onChange={(e) => onCheckedTodo(todo, e.target.checked)} />
      {isEditTodo ? (
        <input onChange={onEditTodoInput} value={newTodo} className={styles.edit_input} />
      ) : (
        <span className={`${todo.checked === true && styles.complete} ${styles.todo_text}`}>{todo.text}</span>
      )}
      <div className={styles.btn_box}>
        {!todo.checked ? (
          isEditTodo ? (
            <button onClick={() => onSubmit(todo)}>완료</button>
          ) : (
            <button onClick={() => onEditTodo()}>수정</button>
          )
        ) : null}
        <button
          onClick={() => {
            onTodoRemoved(todo.id);
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
}
