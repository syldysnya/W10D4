import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodo, receiveTodos, removeTodo } from './frontend/actions/todo_actions';
import todosReducer from './frontend/reducers/todos_reducer';
import configureStore from './frontend/store/store.js'


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // console.log();
    window.removeTodo = removeTodo;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.store = configureStore()
    console.log(store.getState());
    ReactDOM.render(<h1>Super Awesome Todo List</h1>, root);
})
