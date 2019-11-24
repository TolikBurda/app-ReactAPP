import React, { Component } from 'react';
import TodoItemComponent from './TodoItemComponent';

export default class TodoListComponent extends Component {
    render() {
        const { todos, handleDelete, handleToggle } = this.props
        return (
            <div>
                {todos.map( todo => {
                    return(
                        <TodoItemComponent 
                            key = {todo.id}
                            title = {todo.title}
                            completed = {todo.completed}
                            handleDelete = {() => handleDelete(todo.id)}
                            handleToggle = {() => handleToggle(todo.id)}
                        />
                    )
                })}
            </div>
            
        )
    }
}
