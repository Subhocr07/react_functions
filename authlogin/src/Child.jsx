import React from 'react'

const Child = ({ handleAlert }) => {
    return (
        <div>
            <button onClick={handleAlert}>Alert</button>
        </div>
    )
}

export default Child