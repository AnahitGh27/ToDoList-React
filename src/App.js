import { useState } from "react";
import "./App.css";
import TodoList from "./components/ToDoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoFooter from "./components/TodoFooter/TodoFooter";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      task: "Learn JS",
      isCompleted: false,
    },

    {
      id: Math.random(),
      task: "Learn C++",
      isCompleted: false,
    },
  ]);
  return (
    <div className="App">
      <div className="wrapper">
        <TodoForm
          addTask={(task) => {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                task: task,
                isCompleted: false,
              },
            ]);
          }}
        />
        <TodoList
          todos={todos}
          onChange={(newTodo) => {
            setTodos(
              todos.map((todo) => {
                if (todo.id === newTodo.id) {
                  return newTodo;
                }
                return todo;
              })
            );
          }}
          onDelete={(todo) => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
        />
        <TodoFooter
          todos={todos}
          clearCompleted={() => {
            setTodos(todos.filter((todo) => !todo.isCompleted));
          }}
        />
      </div>
    </div>
  );
};

export default App;
