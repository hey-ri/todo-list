import { TodoItem } from './TodoItem';

export function TodoItemList({ items, onTodoRemoved, onTodoChanged }) {
  return (
    <div className="todo_item_list">
      {items.length === 0 ? (
        <span style={{ color: 'gray', fontSize: '.85rem' }}>할 일이 없습니다. 할 일을 추가하세요.</span>
      ) : (
        <p style={{ padding: '0 .5rem .5rem 0', textAlign: 'left' }}>- 오늘의 할 일</p>
      )}
      {items.map((todo, index) => (
        <TodoItem key={index} todo={todo} onTodoRemoved={onTodoRemoved} onTodoChanged={onTodoChanged} />
      ))}
    </div>
  );
}
