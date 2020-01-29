import React, { Component } from 'react'

export interface DisplayProps {
    message: string;
}

export default class Display extends Component<DisplayProps> {

    render(){
        return (
            <div className="display">
                {this.props.message}
            </div>
        );
    }
}