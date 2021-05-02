import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { TodoDetailView } from '../todo_list/todo_detail_view';

const mDTP = (dispatch) => {
    return {
        removeTodo: () => {
            dispatch(removeTodo(todo))
        }
    }
}

export default connect(null, mDTP)(TodoDetailView)