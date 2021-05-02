import React from 'react';
import { uniqueID } from '../../util/util';

class TodoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { 
            id: uniqueID() ,
            title: "",
            body: "" 
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        const title = e.target.value;
        this.setState({ title })
    }

    updateBody(e) { 
        const body = e.target.value;
        this.setState({ body })
    }

    handleSubmit(e)  {
        e.preventDefault()
        debugger
        this.props.receiveTodo(this.state)
        this.setState({
            id: uniqueID() ,
            title: "",
            body: ""
        })
    }




    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:
                        <input onChange={this.updateTitle} 
                            type="text"
                            value={this.state.title} />
                    </label>
                    
                    <label>Body:
                        <input onChange={this.updateBody}
                            type="text"
                            value={this.state.body} />
                    </label>
                 <input type="submit" value="Create Todo"/>
                </form>
            </div>
        )
    }
}

export default TodoForm;