import React from 'react'
import Child from './Child'

const Parent = () => {
    const handleAlert = () => {
        window.alert("Something")
    }
    return (
        <div>
            <Child handleAlert={handleAlert} />
        </div>
    )
}

export default Parent