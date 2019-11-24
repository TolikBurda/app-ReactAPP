import React, { Component } from 'react';

export default class TodoFormComponent extends Component {
    state = {
        title:''
    }
    handleChange = (event) => {
        this.setState({title: event.target.value});
    }

    handleSubmit = (event) => {
        this.props.takeTitle(this.state.title);
        
        this.setState( {title: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form className="todo-form" onSubmit={ this.handleSubmit }>
                <input type="text" 
                    placeholder = "What do we have to do?"
                    value = { this.state.title }
                    onChange = { this.handleChange }/>
                <button type="submit" >Add</button>
            </form>
        )
    }
}