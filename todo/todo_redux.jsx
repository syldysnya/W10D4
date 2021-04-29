import React from 'react';
import ReactDOM from 'react-dom';
import todosReducer from './frontend/reducers/todos_reducer';
import configureStore from './frontend/store/store.js'


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
   window.store = configureStore()
   console.log(store.getState());
    ReactDOM.render(<h1>Super Awesome Todo List</h1>, root);
})
