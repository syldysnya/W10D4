import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';
import TodoForm from '../todo_list/todo_form';
import { TodoListItem } from '../todo_list/todo_list_item';

export const TodoList = ({ todos }) => {
    debugger
    return (
            <div>
                <ul>
                    {todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)}
                </ul>
                <TodoForm receiveTodo={receiveTodo}/>
            </div>
    )
}