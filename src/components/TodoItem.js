import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none' 
    }
  }
  //handler for checking the box
  onChangeCheck = () => {
    this.props.markComplete(this.props.todo.id) //pass up the id
  }
  //onClick handler for x button
  onClickHandler = () => {
    this.props.delTodo(this.props.todo.id) 
  }

  render() {
    const {title} = this.props.todo; //shortcut to not rewrite this.props.todo
    //bind needed since we're binding in render function
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.onChangeCheck}/> 
          {' '}
          {title}
          <button onClick={this.onClickHandler} style = {btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  float: 'right',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer'
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
  
export default TodoItem;