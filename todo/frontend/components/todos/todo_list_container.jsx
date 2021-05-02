import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { TodoList } from './todo_list';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';


const mSTP = (state) => {
    return { todos: allTodos(state) }
}

const mDTP = (dispatch) => {
    debugger
    return {
        receiveTodo: (todo) => {
            debugger
            dispatch(receiveTodo(todo))
        },
        removeTodo: (todo) => {
            dispatch(removeTodo(todo))
        }
    }
}

export default connect(mSTP, mDTP)(TodoList);
