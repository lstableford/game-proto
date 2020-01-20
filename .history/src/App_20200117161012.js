import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Console from './components/console';

class App extends Component {

  render() {
    const msg = 'Ba Na Naaaaaa!';
    
    return (
      <div className="App">
        <Console />
        <Display message={msg} />
      </div>
    );
  }
}

export default App;
