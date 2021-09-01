import React, { useEffect, useState } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import Typography from "@material-ui/core/Typography";

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
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      } )
    )
  }
function removeTodo(id){
setTodos(todos.filter(todo => todo.id !== id));
}

  return (
    <div className="App">

      <p>Todo List</p>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
  
    </div>
  );
}

export default App;
