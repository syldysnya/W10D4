import React from 'react';

class TodoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { title: "", body: "" }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
    }

    updateTitle(e) {
        e.preventDefault();  
        
        const title = e.target.value;
        this.setState({ title })
    }

    updateBody(e) {
        e.preventDefault();    
        
        const body = e.target.value;
        this.setState({ body })
    }

    render () {
        return (
            <div>
                <form>
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

                </form>
            </div>
        )
    }
}

export default TodoForm;