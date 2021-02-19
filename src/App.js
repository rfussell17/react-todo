import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const todoItems = this.state.todos.map((todo) => (
      <TodoItem key={todo.key} todo={todo} />
    ));

    return <div className="App">{todoItems}</div>;
  }
}

export default App;
