import { connect } from 'react-redux';
import { receiveSteps } from '../../actions/step_actions';
import { removeTodo } from '../../actions/todo_actions';
import { TodoDetailView } from '../todo_list/todo_detail_view';

const mDTP = (dispatch) => {
    return {
        removeTodo: () => {
            dispatch(removeTodo(todo))
        },
        receiveSteps: () => {
            dispatch(receiveSteps(steps))
        }
    }
}

export default connect(null, mDTP)(TodoDetailView)