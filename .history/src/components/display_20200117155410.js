import React from 'react'

function Display(propMessage) {
    let message = propMessage.toString();

    return (
        <div class="display">
           {message}
        </div>
    );
}

export default Display;