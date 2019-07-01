import React from 'react';

function Button({ handleClick, type }) {
    return (
    <button onClick={handleClick}>{type}</button>
    )
}

export default Button;