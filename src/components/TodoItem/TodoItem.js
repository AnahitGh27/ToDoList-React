import "./TodoItem.scss";

const TodoItem = ({ todo, onChange, onDelete }) => {
  return (
    <div className="todo-item">
      <label className="todo-input">
        <div className="todo-task">
          <input
            type="checkbox"
            checked={todo.isComleted}
            onChange={(e) => {
              onChange({
                ...todo,
                isCompleted: e.target.checked,
              });
            }}
          />
          <span>{todo.task}</span>
        </div>
        <button
          className="btn"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </label>
    </div>
  );
};

export default TodoItem;
