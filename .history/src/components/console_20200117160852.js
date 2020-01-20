import React, { Component } from 'react'

class Console extends Component {

    render(){
        let msg = '';

        return (
            <div class="console">
                Type here: <input id="message" value="{msg}" />
            </div>
        );
    }
}

export default Console;