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
  //0, 1, 2 = all, completed, incompleted
  const [filterTodoList, setFilterTodoList] = useState(0);

  const onItemAdded = (newItem) => {
    setTodoList([...todoList, newItem]);
    console.log({ newItem });
  };

  const onFilterChanged = (status) => {
    const t = todoList.filter((todos) => todos.checked === true);
    const f = todoList.filter((todos) => todos.checked === false);

    t === true && status === 'completed';
    f === false && status === 'incompleted';

    console.log({ t, f, status });
  };

  const onRemoveTodo = (id) => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoInput onItemAdded={onItemAdded} />
      <TodoItemList
        todoList={todoList}
        setTodoList={setTodoList}
        onRemoveTodo={onRemoveTodo}
        filterTodoList={filterTodoList}
      />
      <Filter onFilterChanged={onFilterChanged}></Filter>
    </div>
  );
}

export default App;
