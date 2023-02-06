import { useState } from 'react';
import reactLogo from './assets/react.svg';
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
  const [selectedFilter, setselectedFilter] = useState();

  const onItemAdded = (newItem) => {
    setTodoList([...todoList, newItem]);
    console.log({ newItem });
  };
  const onFilterChanged = () => {};

  const onRemoveTodo = (id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoInput onItemAdded={onItemAdded} todoList={todoList} />
      <TodoItemList filterTodoList={filterTodoList} todoList={todoList} onRemoveTodo={onRemoveTodo} />
      <Filter onFilterChanged={onFilterChanged}></Filter>
    </div>
  );
}

export default App;
