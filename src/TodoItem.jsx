import styles from './TodoItemList.module.css';

export function TodoItem({ todo, onRemoveTodo, onTodoChanged }) {
  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
    // setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };
  return (
    <div>
      <input type="checkbox" checked={todo.checked} onChange={(e) => onCheckedTodo(todo, e.target.checked)} />
      <span className={todo.checked === true ? styles.complete : styles.incomplete}>
        {todo.text}
        <button
          onClick={() => {
            onRemoveTodo(todo.id);
          }}
        >
          🗑
        </button>
      </span>
    </div>
  );
}
