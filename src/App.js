
import './App.css';
import React, { useState } from "react;"

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
