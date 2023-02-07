import styles from './TodoItemList.module.css';

export function TodoItemList({ items, onRemoveTodo, onTodoChanged }) {
  const onCheckedTodo = (todo, checked) => {
    todo.checked = checked;
    onTodoChanged(todo);
    // setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));

    console.log(items);
  };

  return (
    <div>
      <div className="todoItemList">
        {items.map((todo, index) => (
          <div key={index}>
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
        ))}
      </div>
    </div>
  );
}
