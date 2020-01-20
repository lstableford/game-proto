import React, { Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component {

  render() {
    const msg = 'Ba Na Naaaaaa!';

    
    return (
      <div className="App">
        <Display message={msg} />
      </div>
    );
  }
}

export default App;
