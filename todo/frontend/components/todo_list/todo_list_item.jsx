import React from "react"

export const TodoListItem = (props) => {
    debugger
    return (
        
        <li >{props.todo.title}
            <button onClick={() => props.removeTodo(props.todo)}>Delete</button>
        </li>

    )
}

