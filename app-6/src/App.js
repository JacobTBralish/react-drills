import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        list: [],
        task: ""
      }
  }

  handleChange = ({target}) => {
    this.setState({
      task:target.value
    })
  }

  handleSubmit = (e) => {
    let {task, list} = this.state;
    e.preventDefault()
    this.setState({
      task: "",
      list: [...list, task]
    })
  }



  render() {
    return (
      <div>
       <form className="App" onSubmit={this.handleSubmit}>
        <input type="text" className="textBox" value={this.state.task} onChange={this.handleChange}/>
        <button className="add">Add</button>
       </form>
       <Todo task={this.state.list} />
      </div>
    );
  }
}

export default App;
