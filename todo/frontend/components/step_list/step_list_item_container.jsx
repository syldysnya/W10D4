import { connect } from 'react-redux';
import { receiveStep, removeStep } from '../../actions/step_actions';
import { StepListItem } from './step_list_item';

const mDTP = (dispatch) => {
    debugger
    return {
        removeStep: (step) => {
            debugger
            dispatch(removeStep(step))
        },
        receiveStep: (step) => {
            debugger
            dispatch(receiveStep(step))
        }
    }
}

export default connect(null, mDTP)(StepListItem)