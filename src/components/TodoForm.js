import { falseFunc } from "boolbase";
import { useState } from "react";
import React from "react";
import uuid from "uuid";

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
        if (todo.task.trim()){
            addTodo({...todo, id: uuid.v4()});
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form onSubmit={}>
           <input 
           name="task"
           type="text"
           value={todo.task}
           onChange={handleTaskInputChange}/>

           <button/>
        </form>
    )
}