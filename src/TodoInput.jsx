export function TodoInput({ onItemAdded, todoList }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded({ text: e.target.task.value, id: todoList.length });
    console.log(e.target.task.value);
    e.target.task.value = '';
  };

  return (
    <div className="todo_input">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>할일:</label>
          <input name="task" type="text" placeholder="할 일을 입력하세요" />
        </fieldset>
      </form>
    </div>
  );
}
