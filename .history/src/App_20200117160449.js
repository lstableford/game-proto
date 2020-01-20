import React, { Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component {

  render() {
    const msg = { value:'Woot' };

    
    return (
      <div className="App">
        <Display propMessage={msg} />
      </div>
    );
  }
}

export default App;
