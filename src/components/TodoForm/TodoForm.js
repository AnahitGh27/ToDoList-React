import { useState } from "react";
import "./TodoForm.scss";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
      }}
    >
      <input
        type="text"
        placeholder="Add a new task"
        className="todo-form-input"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button className="btn">Add</button>
    </form>
  );
};

export default TodoForm;
