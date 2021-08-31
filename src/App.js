import React, { useEffect, useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);

useEffect(() => {
  const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(storage_todos){
      setTodos(storageTodos)
    }
  }
}, []);

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  
  
  
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo)
    )
  }
  return (
    <div className="App">
      <header className="App-header">
      <p>Todo List</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
