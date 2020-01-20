import React from 'react'

function Display({propMessage}) {

    return (
        <div class="display">
           {propMessage.value}
        </div>
    );
}

export default Display;