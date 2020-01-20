import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Console from './components/console';

class App extends Component {

  render() {
    const msg = (text) => {
      currentText=text;
      this.render();
    };

    let currentText = ''

    return (
      <div className="App">
        <Console passText={msg} />
        <Display message={currentText} />
      </div>
    );
  }
}

export default App;
