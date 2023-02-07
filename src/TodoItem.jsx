import { useState } from 'react';
import styles from './TodoItemList.module.css';

export function TodoItem({ todo, onRemoveTodo, onTodoChanged }) {
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.text);

  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
  };

  const onEditTodoBtn = () => {
    setIsEditTodo(true);
  };

  const onChangedEditTodoInput = (e) => {
    setNewTodo(e.target.value);
  };

  const onClickSubmitButton = (todo, newTodo) => {
    todo.text = newTodo;
    onTodoChanged(todo);

    setIsEditTodo(false);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.checked} onChange={(e) => onCheckedTodo(todo, e.target.checked)} />
      {isEditTodo ? (
        <input onChange={onChangedEditTodoInput} />
      ) : (
        <span className={todo.checked === true ? styles.complete : styles.incomplete}>{todo.text}</span>
      )}
      {!todo.checked ? (
        isEditTodo ? (
          <button onClick={() => onClickSubmitButton(todo, newTodo)}>완료</button>
        ) : (
          <button onClick={() => onEditTodoBtn()}>수정</button>
        )
      ) : null}
      <button
        onClick={() => {
          onRemoveTodo(todo.id);
        }}
      >
        🗑
      </button>
    </div>
  );
}
