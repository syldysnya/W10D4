import React from "react"
import { TodoDetailView } from "./todo_detail_view";

class TodoListItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            detail: false
        }
        debugger
        this.updateDetail = this.updateDetail.bind(this);
    }

    updateDetail() {
        if (this.state.detail) {
            this.setState({ detail: false })
        } else {
            this.setState({ detail: true })
        }
    }

    updateState(e, todo) {
        if (todo.done === false) {
            todo.done = true;
            e.target.innerHTML = 'Undo';
            e.target.classList.remove('undone');
            e.target.classList.add('done');
        } else {
            todo.done = false;
            e.target.innerHTML = 'Done';
            e.target.classList.remove('done');
            e.target.classList.add('undone');
        }
        return todo
    }

    render() {
        if (this.state.detail) {
            // debugger
            return (
                <div>
                    <li>
                        <h1 onClick={this.updateDetail}>{this.props.todo.title}</h1>
                        <button onClick={(e) => this.props.receiveTodo(this.updateState(e, this.props.todo))} className='undone'>Done</button>
                    </li>
                    <TodoDetailView
                    removeTodo={this.props.removeTodo}
                    todo={this.props.todo}/>
                </div>
            )
        }
        // debugger
        return (
            <li>
                <h1 onClick={this.updateDetail}>{this.props.todo.title}</h1>
                <button onClick={(e) => this.props.receiveTodo(this.updateState(e, this.props.todo))} className='undone'>Done</button>
            </li>
        )
    }
}

export default TodoListItem;