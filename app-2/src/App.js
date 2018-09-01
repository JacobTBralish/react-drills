import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ['beef', 'rice', 'carrots', 'eggs']
    }
  }
  render() {
    let arrayMap = this.state.array.map((e,i) => {
    return ( 
      <h2 key = {i}>{e}</h2>
    )
  })
      return(
      <div className="App">
        {arrayMap}
      </div>
    );
  }
}

export default App;
