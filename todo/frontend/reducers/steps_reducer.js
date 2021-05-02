import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const initialState = {
    
    1: { // this is the step with id = 1
        id: 1,
            title: 'walk to store',
            body: 'body 1',
                done: false,
                    todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
            title: 'buy soap',
            body: 'body 2',
                done: false,
                    todo_id: 1
    }

}

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STEPS:
            // debugger
            action.steps.forEach(step => nextState[step.id] = step);
            return nextState;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            const stepId = action.step.id;
            delete nextState[`${stepId}`];
            return nextState;
        default:
            return state;
    }
}

export default stepsReducer;