import React, { Component } from 'react';
import './App.css';
import Display from './components/display';
import Console from './components/console';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentText: ''
    };
  }

  render() {
    const msg = (text) => {
      this.setState(state => ({
        currentText: text
      }));
      //this.render();
    };

    let currentText = ''

    return (
      <div className="App">
        <Console passText={msg} />
        <Display message={this.state.currentText} />
      </div>
    );
  }
}

export default App;
