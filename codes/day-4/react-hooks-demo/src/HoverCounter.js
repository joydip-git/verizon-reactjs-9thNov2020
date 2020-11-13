import React from 'react'
import useCounter from './useCounter'

const HoverCounter = () => {
    const [counter, setCounter] = useCounter(20);
    return (
        <div>
            Count: &nbsp;{counter}
            <br />
            <div onMouseOver={setCounter}>
                Increase
            </div>
        </div>
    )
}

export default HoverCounter
