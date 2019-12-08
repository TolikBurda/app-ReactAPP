import React, { Component } from 'react';
import TodoEditComponent from './TodoEditComponent';

export default class TodoItemComponent extends Component {
    state = {
        editComponentVisible: false
      }
    handleEdit = () => {
        this.setState({ editComponentVisible: !this.state.editComponentVisible });
    }
    render() {
        return (
            this.state.editComponentVisible ? 
                <TodoEditComponent 
                    title = {this.props.title} 
                    editTodo = { this.props.editTodo } 
                    id = { this.props.id } 
                    saveChanges = { this.handleEdit }
                    /> :
            <section className="todo-list">
                <div className = {this.props.completed ? "todo-item completed": "todo-item"}> 
                    <button 
                        className="checkbox icon "
                        onClick = { this.props.handleToggle }
                        >
                        <i className="material-icons" >{ this.props.completed ? 'check_box' : 'check_box_outline_blank' }</i> 
                    </button>

                    <span className="title">{this.props.title}</span>

                    <div className="actions">
                        <button 
                            className="edit icon"
                            onClick = { this.handleEdit }
                            >
                            <i className="material-icons">edit</i>
                        </button>
                        <button 
                            className="delete icon"
                            onClick = { this.props.handleDelete }
                            >
                            <i className="material-icons">delete</i>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
