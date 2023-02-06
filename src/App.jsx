import { useState } from 'react';
import './App.css';
import { TodoInput } from './TodoInput';
import { TodoItemList } from './TodoItemList';
import Filter from './Filter';

function App() {
  // App
  // @todoList
  // @filteredTodoList
  // -- TodoInput  *onItemAdded
  // -- TodoItemList (map) {@filteredTodoList}
  //    -- TodoItem {@todo}
  // -- Filter *onFilterChanged

  const [todoList, setTodoList] = useState([]);
  const [filterTodoList, setFilterTodoList] = useState(false);

  const onItemAdded = (newItem) => {
    setTodoList([...todoList, newItem]);
    console.log({ newItem });
  };

  const onFilterChanged = (ch) => {
    if (ch == 'completed') {
      setTodoList((todos) => todos.filter((todo) => todo.checked === true));
    } else if (ch == 'incompleted') {
      setTodoList((todos) => todos.filter((todo) => todo.checked === false));
    }
    console.log({ ch, todoList });
  };

  const onRemoveTodo = (id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoInput onItemAdded={onItemAdded} />
      <TodoItemList todoList={todoList} setTodoList={setTodoList} onRemoveTodo={onRemoveTodo} />
      <Filter onFilterChanged={onFilterChanged}></Filter>
    </div>
  );
}

export default App;
