import { useMemo, useState } from 'react';
import './App.css';
import { TodoInput } from './TodoInput';
import { TodoItemList } from './TodoItemList';
import Filter from './Filter';

function App() {
  //@=state / $: = useeffect , => = 뭘 바꿀건지 / * eventlistener

  // App
  // @todoList
  // @filteredTodoList
  // $: [filter, todoList] => todoList
  // -- TodoInput  *onItemAdded
  // -- TodoItemList items={@filteredTodoList} *onTodoChanged *onTodoRemoved
  //    -- TodoItem value={@todo} *onChanged *onRemoved
  // -- Filter *onFilterChanged

  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const filterTodoList = useMemo(() => {
    if (filter === 'completed') {
      return todoList.filter((t) => t.checked);
    } else if (filter === 'incompleted') {
      return todoList.filter((t) => !t.checked);
    } else {
      return todoList;
    }
  }, [filter, todoList]);

  const onItemAdded = (newItem) => {
    setTodoList([...todoList, newItem]);
    console.log({ newItem });
  };

  const onFilterChanged = (filter) => {
    setFilter(filter);
  };

  const onTodoRemoved = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onTodoChanged = (todo) => {
    setTodoList(todoList.map((t) => (t.id === todo.id ? todo : t)));
  };

  return (
    <div className="App">
      <TodoInput onItemAdded={onItemAdded} />
      <Filter onFilterChanged={onFilterChanged}></Filter>
      <TodoItemList items={filterTodoList} onTodoChanged={onTodoChanged} onTodoRemoved={onTodoRemoved} />
    </div>
  );
}

export default App;
