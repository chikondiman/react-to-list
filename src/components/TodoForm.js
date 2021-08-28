import { falseFunc } from "boolbase";
import { useState } from "react";
import React from "react";

function TodoForm() {
    const [todo, setTodo] = useState ({
        id:"",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form>
           <input 
           name="task"
           type="text"
           value={todo.task}
           onChange={handleTaskInputChange}/>

           <button/>
        </form>
    )
}