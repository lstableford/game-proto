import React, { Component } from 'react'

class Display extends Component {

    render(){
        return (
            <div className="display">
                {this.props.message}
            </div>
        );
    }
}

export default Display;