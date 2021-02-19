import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import "./App.css";

function App() {
  const todoItems = todosData.map((todo) => (
    <TodoItem key={todo.key} todo={todo} />
  ));

  return <div className="App">{todoItems}</div>;
}

export default App;
