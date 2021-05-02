import React from 'react';

export const TodoDetailView = (props) => {
    return (
        <div>
            <p>{props.todo.body}</p>
            <div>Steps</div>
            <button onClick={() => props.removeTodo(props.todo)}>Delete</button>       
        </div>
    )

}
