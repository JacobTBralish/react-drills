import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        arr: ['banana','chicken','water','coffee','yogurt'],
        str: ''
      }
    }
  handleChange(value){
  this.setState({str: value})
  }

  render() {
    let arrFilter = this.state.arr.filter((e,i) => {
     return  e.includes(this.state.str);
    }).map( (e,i) => {
    return  <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
      <input type="text" className="textBox" onChange={(event) => {this.handleChange(event.target.value)}}/>
      <h1>{arrFilter}</h1>
      </div>
    );
  }
  }


export default App;
