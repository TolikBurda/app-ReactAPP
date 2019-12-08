import React, { Component } from 'react';

export default class TodoEditComponent extends Component {
    state = {
        title: this.props.title
    }
    
    handleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleSaveChanges = () => {
        this.props.editTodo(this.props.id, this.state.title);
        this.props.saveChanges();
    }

    render() {
        return (
            <section className = "todo-list">
                <div className = "todo-item"> 
                    <input 
                        type="text"
                        value = {this.state.title}
                        onChange = { this.handleChange }
                        />
                    <div className="actions">
                        <button 
                            className="save icon"
                            onClick = { this.handleSaveChanges }
                            >
                            <i className="material-icons">save</i>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

