import * as React from 'react';
import './App.css';
import Display from './components/display';
import Console from './components/console';
import { appContext } from './appContext';

export interface AppState {
  currentText: string;
}

export default class App extends React.Component<any, AppState> {
  constructor(props: any){
    super(props);

    this.state = {
      currentText: ''
    };
  }

  setMessage = (text: string) => {
    this.setState(state => ({
      currentText: text
    }));
    this.render();
  };

  render() {
    return (
      <appContext.Provider
        value={{
          ...this.state,
          sendMessage: this.setMessage
        }}>
        <div className="App">
          <Console />
          <Display message={this.state.currentText} />
        </div>
      </appContext.Provider>
    );
  }
}
