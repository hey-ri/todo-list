import { TodoItem } from './TodoItem';

export function TodoItemList({ items, onTodoRemoved, onTodoChanged }) {
  return (
    <div className="todo_item_list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ textAlign: 'center', paddingBottom: '.5rem' }}>오늘의 할 일</p>
      {items.length === 0 && <p style={{ color: 'gray', fontSize: '.9rem' }}>&lt; 할 일이 없습니다 &gt;</p>}
      {items.map((todo, index) => (
        <TodoItem key={index} todo={todo} onTodoRemoved={onTodoRemoved} onTodoChanged={onTodoChanged} />
      ))}
    </div>
  );
}
