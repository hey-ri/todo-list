import styles from './TodoItemList.module.css';

export function TodoItemList({ todoList, onRemoveTodo, setTodoList, filterTodoList }) {
  const onCheckedTodo = (id) => {
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));

    console.log(todoList);
  };

  console.log({ filterTodoList });

  return (
    <div>
      <div className="todoItemList">
        {todoList.map((todo, index) => (
          <div key={index}>
            <input type="checkbox" checked={todoList.checked} onChange={() => onCheckedTodo(todo.id)} />
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
