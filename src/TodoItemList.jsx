export function TodoItemList({ filterTodoList, todoList, onRemoveTodo }) {
  return (
    <div>
      <div className="todoItemList">
        {todoList.map((todo, index) => (
          <div className="todoItem" key={index}>
            {todo.text}
            <button
              onClick={() => {
                onRemoveTodo(todo.text);
                console.log(todo.text);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
