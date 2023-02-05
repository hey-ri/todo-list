import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TodoInput } from "./TodoInput";
import { TodoItemList } from "./TodoItemList";
import Filter from "./Filter";

function App() {
    // App
    // @todoList
    // @filteredTodoList
    // -- TodoInput  *onItemAdded
    // -- TodoItemList (map) {@filteredTodoList}
    //    -- TodoItem {@todo}
    // -- Filter *onFilterChanged

    const [todoList, setTodoList] = useState([]);
    const [filterTodoList, setFilterTodoList] = useState(true);
    const [selectedFilter, setselectedFilter] = useState();
    const onItemAdded = (newItem) => {
        setTodoList([...todoList, newItem]);
        console.log({ newItem });
    };
    const onFilterChanged = () => {};

    return (
        <div className="App">
            <TodoInput onItemAdded={onItemAdded} />
            <TodoItemList filterTodoList={filterTodoList} todoList={todoList} />
            <Filter onFilterChanged={onFilterChanged}></Filter>
        </div>
    );
}

export default App;