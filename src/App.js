import React, { Component } from 'react';
import ToDoList from './testComponents/toDoList';
import './App.css';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/todo">todo</Link>
        <Route path="/todo" component={ToDoList}></Route>
      </div>
    );
  }
}

export default App;
