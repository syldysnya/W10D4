export const allTodos = (state) => {
    let todos = Object.values(state.todos)
    return todos
}

export const stepsByTodoOd = (state, todoId) => {
    let steps = [];

    let arrObj = Object.values(state.steps);
    arrObj.forEach(ele => {
        if (ele.todo_id === todoId) steps.push(ele)
    });
    return steps;
}