import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css'
//import {v4 as uuid} from "uuid"; //for generating random ids 
import axios from 'axios' //http library for http requests (get, post, ... etc.)

class App extends Component {
  state = {
    todos: [] //will be retrieved from a url (eg. http request to rest api)
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')//to fetch resources (this site is just for mimicing a real backend)
      .then(res => this.setState({todos:res.data}))
  }
  //Toggle complete state --arrow functions allow us to skip the binding step
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if (id === todo.id){
        todo.completed = !todo.completed //toggle value
      }  
      return todo
    })})
  }
  //filter out deleted todo element
  delTodo = (id) =>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //``needed
      .then(res => this.setState({todos: this.state.todos.filter(todo => 
      todo.id !== id
    )}))
  }
  
  //add to todo list
  addTodo = (title) => {
    //console.log(title) for testing
    axios.post('https://jsonplaceholder.typicode.com/todos', { //http post to database
      title:title,
      completed: false
    }).then(res=>this.setState({todos: [...this.state.todos, res.data]}))//copies and adds new item (res=response)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
              <Route exact path='/' render={props => ( //rendering needed if multiple components
                <div>
                  <AddTodo addTodo = {this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
                </div>
              )} />
              <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//npm run build to deploy the app (eg.on python,django,github)