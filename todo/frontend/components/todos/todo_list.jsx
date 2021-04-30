import React from 'react';
import { TodoListItem } from '../todo_list/todo_list_item';

export const TodoList = ({ todos }) => {
    debugger
    return (
            <ul>
                {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
            </ul>
    )
}