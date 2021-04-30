import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root'
import { allTodos } from './frontend/reducers/selectors';
import configureStore from './frontend/store/store';



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store
    window.allTodos = allTodos;

    ReactDOM.render(<Root store={store}/>, root);
})
