import { TodoItem } from './TodoItem';

export function TodoItemList({ items, onTodoRemoved, onTodoChanged }) {
  return (
    <div>
      <div className="todoItemList">
        {items.map((todo, index) => (
          <TodoItem key={index} todo={todo} onTodoRemoved={onTodoRemoved} onTodoChanged={onTodoChanged} />
        ))}
      </div>
    </div>
  );
}
