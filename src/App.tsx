import * as React from 'react';
import './App.css';
import Display from './components/display';
import Console from './components/console';
import { appContext } from './appContext';

export interface AppProps {}

export interface AppState {
  currentText: string;
  sendMessage: (text:string) => void;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: any, context: any){
    super(props, context);

    this.state = {
      currentText: '',
      sendMessage: (text) => { this.setMessage(text); }
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
