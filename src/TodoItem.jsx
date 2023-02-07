import styles from './TodoItemList.module.css';

export function TodoItem({ value, onRemoveTodo, onTodoChanged }) {
  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
    // setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };
  return (
    <div>
      <input type="checkbox" checked={value.checked} onChange={(e) => onCheckedTodo(value, e.target.checked)} />
      <span className={value.checked === true ? styles.complete : styles.incomplete}>
        {value.text}
        <button
          onClick={() => {
            onRemoveTodo(value.id);
          }}
        >
          🗑
        </button>
      </span>
    </div>
  );
}
