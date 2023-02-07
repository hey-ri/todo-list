import { TodoItem } from './TodoItem';

export function TodoItemList({ items, onRemoveTodo, onTodoChanged }) {
  return (
    <div>
      <div className="todoItemList">
        {items.map((todo, index) => (
          <TodoItem index={index} todo={todo} onRemoveTodo={onRemoveTodo} onTodoChanged={onTodoChanged} />
        ))}
      </div>
    </div>
  );
}
