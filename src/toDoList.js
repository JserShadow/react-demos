import React, { Component } from 'react'
import './toDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: 'Jerry', age: 21, gender: 'male' },
        { username: 'Tomy', age: 22, gender: 'male' },
        { username: 'Lily', age: 19, gender: 'female' },
        { username: 'Lucy', age: 20, gender: 'female' }
      ],
      input: ''
    }
  }
  handleInput(e) {
    const val = e.target.value;
    this.setState((prev) => {
      return {
        input: val
      }
    });
  }
  addUser() {
    const input = this.state.input;
    if (input) {
      this.setState((prev) => {
        prev.users.push({
          username: input
        })
        return {
          users: prev.users,
          input: ''
        }
      })
      document.getElementsByTagName('input')[0].value = '';
    } else {
      alert('请输入内容');
    }
  }
  removeSingleUser(index) {
    this.setState((prev) => {
      prev.users.splice(index, 1);
      return {
        users: prev.users
      }
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInput.bind(this)} /> <button onClick={this.addUser.bind(this)}>添加用户</button>
        <ul className="list">
          {this.state.users.map((user, index) => {
            return (
              <li key={index}>
                <span className="name">
                  {user.username}
                </span>
                <button className="deleteButton" onClick={this.removeSingleUser.bind(this, index)}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default ToDoList
