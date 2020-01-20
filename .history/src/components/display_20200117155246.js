import React from 'react'

function Display(propMessage) {
    return (
        <div class="display">
           { propMessage.toString() }
        </div>
    );
}

export default Display;