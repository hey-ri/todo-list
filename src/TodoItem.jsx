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
    <div>
      <input type="checkbox" checked={todo.checked} onChange={(e) => onCheckedTodo(todo, e.target.checked)} />
      {isEditTodo ? (
        <input onChange={onEditTodoInput} value={newTodo} />
      ) : (
        <span className={todo.checked === true ? styles.complete : styles.incomplete}>{todo.text}</span>
      )}
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
  );
}
