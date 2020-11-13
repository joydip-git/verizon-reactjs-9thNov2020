import React, { useState } from 'react'
import Name from './Name';
import Value from './Value';

const Parent = () => {
    const [parentState, setParentState] = useState({ name: '', value: 0, show: true });

    const updateName = (newName) => {
        setParentState(ps => {
            return {
                ...ps,
                name: newName
            }
        })
    }
    const updateValue = () => {
        setParentState(ps => {
            return {
                ...ps,
                value: ps.value + 1
            }
        })
    }
    console.log('[Parent] rendered')
    return (
        <div>
            <button
                onClick={() => setParentState(ps => { return { ...ps, show: !ps.show } })}>{parentState.show ? 'Hide' : 'Show'}</button>
            <Name handler={updateName} name={parentState.name} />
            <br />
            <br />
            {parentState.show && <Value handler={updateValue} value={parentState.value} />}
        </div>
    )
}

export default Parent
