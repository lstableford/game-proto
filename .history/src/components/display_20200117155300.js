import React from 'react'

function Display(propMessage) {
    return (
        <div class="display">
           { JSON.stringify(propMessage) }
        </div>
    );
}

export default Display;