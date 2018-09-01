import React, { Component } from 'react';
import './App.css';
import Login from './Login'

class App extends Component {
  constructor() {
    super();
      this.state = {
        str: ''
      }
    }
 
  
  render() {
    return (
      <div className="App">
      <Login />
      
      <p>{this.state.str}</p>
      </div>
    );
  }
}

export default App;

