import React, {Component} from 'react';
import TodoFormComponent from './components/TodoFormComponent';
import TodoListComponent from './components/TodoListComponent';
import ConfirmModal from './components/ConfirmModal';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [],
    confirmModalVisible: false,
    idTodo_ToDelete: null
  }

  createTodo = (title) => {

    const newTodoItem = {
      id: uuid(),
      title: title,
      completed: false
    };
    
    const newTodos = [...this.state.todos, newTodoItem];

    this.setState({todos: newTodos});
  }

  handleDelete = (id) => {
    this.setState({ confirmModalVisible: true, idTodo_ToDelete: id });
  }

  deleteTodo = () => {
    const filteredTodos = this.state.todos.filter( todo => {
      return todo.id !== this.state.idTodo_ToDelete;
    });
    this.setState({
      todos: filteredTodos,
      confirmModalVisible: false,
      idTodo_ToDelete: null
    });
  }

  editTodo = (id, title) => {
    const editedTodos = this.state.todos.filter( todo => {
      if(todo.id === id){
        todo.title = title;
        return todo;
      }
      return todo;
    });
    this.setState({todos: editedTodos});
  }

  cancelDelete = () => { 
    this.setState({confirmModalVisible: false, idTodo_ToDelete: null});
  }

  handleToggle = (id) => {
    const toggledTodos = this.state.todos.filter( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
        return todo;
      }
      return todo;
    });
    this.setState({todos: toggledTodos});
  }

  render(){
    return (
      <div className="App">
        <ConfirmModal 
          visible = { this.state.confirmModalVisible }
          deleteTodo = { this.deleteTodo }
          cancelDelete = { this.cancelDelete }
        />
        <TodoFormComponent 
          takeTitle = { this.createTodo }
          />
        <TodoListComponent
          todos = { this.state.todos }
          handleDelete = { this.handleDelete }
          handleToggle = { this.handleToggle } 
          editTodo = { this.editTodo }
          />
      </div>
      
    );
  }
}

export default App;
