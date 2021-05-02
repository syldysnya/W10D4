import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import { stepsByTodoOd } from '../../reducers/selectors';
import { StepList } from './step_list';

const mSTP = (state, { todo_id }) => {
    debugger
    return {
        steps: stepsByTodoOd(state, todo_id),
        todo_id
    }
}

const mDTP = (dispatch) => {
    return {
        receiveStep: (step) => {
            dispatch(receiveStep(step))
        }
    }
}

export default connect(mSTP, mDTP)(StepList)