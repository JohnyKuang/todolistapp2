import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {

  render() {
    return this.props.todos.map(todoitem => (
      <TodoItem key={todoitem.id} todo={todoitem} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    )); 
  }
}

//Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}  
  
export default Todos;
  