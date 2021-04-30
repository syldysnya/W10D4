import React from 'react';

export const TodoList = ({ todos }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => <li>{todo.title}</li>)}
            </ul>
        </div>
    )
}