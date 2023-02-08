import { useState } from 'react';
import styles from './TodoItemList.module.css';

export function TodoItem({ todo, onTodoRemoved, onTodoChanged }) {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.text);

  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
  };

  const onEditTodoBtn = () => {
    setIsEditTodo(true);
  };

  const onEditTodoInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmitBtn = (todo, newTodo) => {
    todo.text = newTodo;
    onTodoChanged(todo);

    setIsEditTodo(false);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.checked} onChange={(e) => onCheckedTodo(todo, e.target.checked)} />
      {isEditTodo ? (
        <input onChange={onEditTodoInput} />
      ) : (
        <span className={todo.checked === true ? styles.complete : styles.incomplete}>{todo.text}</span>
      )}
      {!todo.checked ? (
        isEditTodo ? (
          <button onClick={() => onSubmitBtn(todo, newTodo)}>완료</button>
        ) : (
          <button onClick={() => onEditTodoBtn()}>수정</button>
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
