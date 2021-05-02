import React from 'react';
import StepListContainer from '../step_list/step_list_container'

export const TodoDetailView = (props) => {
    debugger
    return (
        <div>
            <p>{props.todo.body}</p>
            <div><StepListContainer todo_id={props.todo.id} /></div>
            <button onClick={() => props.removeTodo(props.todo)}>Delete</button>       
        </div>
    )

}
