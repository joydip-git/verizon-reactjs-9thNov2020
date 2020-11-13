import React from 'react'
import useCounter from './useCounter'

const ClickCounter = () => {
    const [counter, setCounter] = useCounter(10)
    return (
        <div>
            Count: &nbsp;{counter}
            <br/>
            <button onClick={setCounter}>
                Increase
            </button>
        </div>
    )
}

export default ClickCounter
