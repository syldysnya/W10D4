import { RECEIVE_TODOS } from "../actions/todo_actions";

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TODOS:
            nextState[action.todos.id] = action.todo;
        default:
            return state;
    }
};

export default todosReducer;