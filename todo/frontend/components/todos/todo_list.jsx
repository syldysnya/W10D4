import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

export const TodoList = (props) => {
    debugger
    return (
            <div>
                <ul>
                {props.todos.map(todo => <TodoListItem 
                            receiveTodo={props.receiveTodo}
                            removeTodo = {props.removeTodo}
                            key={todo.id} 
                            todo={todo}
                        />
                     )}
                </ul>
                <TodoForm receiveTodo={props.receiveTodo}/>
            </div>
    )
}