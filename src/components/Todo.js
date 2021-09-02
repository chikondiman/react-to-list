import React from "react";
import { Checkbox, IconButton, ListItem, Typography} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close";
import createTypography from "@material-ui/core/styles/createTypography";
function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <ListItem style={{ display: "flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <Typography
        style={{
            color: "white",
            textDecoration: todo.completed ? "line-through" : null
        }}
        
        >{todo.task}</Typography>
        <button onClick={handleRemoveClick}>X</button>

        </div>
    );
}

export default Todo;