import React, { Component } from 'react'

class Console extends Component {

    render(){
        return (
            <div className="console">
                Type here: <input id="message" onKeyUp={this.props.passText}  />
            </div>
        );
    }
}

export default Console;