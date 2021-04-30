import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { TodoList } from './todo_list';

const mSTP = (state) => {
    return { todos: allTodos(state) }
}

const mDTP = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            dispatch(receiveTodo(todo))
        }
    }
}

export default connect(mSTP, mDTP)(TodoList);
