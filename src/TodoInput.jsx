export function TodoInput({ onItemAdded }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded({ text: e.target.task.value });
    console.log(e.target.task.value);
    e.target.task.value = '';
  };
  return (
    <div className="todo_input">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label>할일:</label>
          <input name="task" type="text" />
        </fieldset>
      </form>
    </div>
  );
}
