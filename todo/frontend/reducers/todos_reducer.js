import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {

    1: {
        id: 1,
        title: 'take a shower',
        body: 'and be clean',
        done: false
    },
     2: {
        id: 2,
        title: 'take a bath',
        body: 'and be clean',
        done: false
    },
     3: {
        id: 3,
        title: 'brush teeth',
        body: 'and be clean',
        done: false
    }

};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo_list => nextState[todo_list.id] = todo_list)
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return nextState;
        case REMOVE_TODO:
            const todoId = action.todo.id;
            delete nextState[`${todoId}`];
            return nextState;
        default: 
            return state;
    }
};

export default todosReducer;