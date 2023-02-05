export function TodoItemList({ filterTodoList, todoList }) {
    return (
        <div>
            <div className="todoItemList">
                {todoList.map((d, i) => (
                    <div className="todoItem" key={i}>
                        {d.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
