import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        str: ''
      }
    }
  handleChange(value){
  this.setState({str: value})
  }
  
  render() {
    return (
      <div className="App">
      <input type="text" className="textBox" onChange={(event) => {this.handleChange(event.target.value)}}/>
      <p>{this.state.str}</p>
      </div>
    );
  }
}

export default App;
