import React from "react";


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }
    
    handleChanges = e => {
        this.setState({task: e.target.value});
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    };

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value={this.state.task}
                    name="task"
                    onChange={this.handleChanges}/>
                <button>Add Todo</button>
                <button className="clear-completed" onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;