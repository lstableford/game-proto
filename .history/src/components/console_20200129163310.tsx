import React, { Component } from 'react'
import { appContext } from '../appContext';

export default class Console extends Component {

    render(){
        return (
            <div className="console">
                Type here: <input id="message" onKeyUp={this._setText}  />
            </div>
        );
    }

    _setText = (e) => {
        this.context.sendMessage(e.target.value);
    }
}
Console.contextType = appContext;