import { TodoItem } from './TodoItem';

export function TodoItemList({ items, onTodoRemoved, onTodoChanged }) {
  return (
    <div className="todo_item_list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {items.map((todo, index) => (
        <TodoItem key={index} todo={todo} onTodoRemoved={onTodoRemoved} onTodoChanged={onTodoChanged} />
      ))}
    </div>
  );
}
