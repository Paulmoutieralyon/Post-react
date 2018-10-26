import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Films from './Films';
import changement from './changement';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Films/> 
        {/* <changement/> */}
      </div>
    );
  }
}

export default App;