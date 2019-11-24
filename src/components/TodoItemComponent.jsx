import React from 'react';

function TodoItemComponent(props) {
    return (
        <section className="todo-list">
            <div className = {props.completed ? "todo-item completed": "todo-item"}> 
                <button 
                    className="checkbox icon "
                    onClick = { props.handleToggle }
                    >
                    <i className="material-icons" >{ props.completed ? 'check_box' : 'check_box_outline_blank' }</i> 
                </button>

                <span className="title">{props.title}</span>

                <div className="actions">
                    <button 
                        className="delete icon"
                        onClick = { props.handleDelete }
                        >
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TodoItemComponent;