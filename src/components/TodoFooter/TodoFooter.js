import "./TodoFooter.scss";

const TodoFooter = ({ todos, clearCompleted }) => {
  const completedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="todo-footer">
      <span className="footer-completed">
        {completedSize} / {todos.length} Completed
      </span>
      <button className="btn" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
