import React, { useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
      <header className="App-header">
      <p>Todo List</p>
      </header>
    </div>
  );
}

export default App;
