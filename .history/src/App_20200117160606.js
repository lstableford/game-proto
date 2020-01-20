import React, { Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component {

  render() {
    const msg = 'Woot';

    
    return (
      <div className="App">
        <Display message={msg} />
      </div>
    );
  }
}

export default App;
