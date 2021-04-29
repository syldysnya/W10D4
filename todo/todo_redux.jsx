import React from 'react';
import ReactDOM from 'react-dom';
import todosReducer from './frontend/reducers/todos_reducer';

const todos = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    // console.log();
    window.todosReducer = todosReducer;
    ReactDOM.render(<h1>Super Awesome Todo List</h1>, root);
})
