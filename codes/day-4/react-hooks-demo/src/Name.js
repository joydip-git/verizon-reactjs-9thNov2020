import React from 'react'

const Name = ({ name, handler }) => {
    console.log('[Name] rendered')
    return (
        <div>
            Name:&nbsp;
            <input type='text' value={name} onChange={(event) => handler(event.target.value)} />
        </div>
    )
}

export default Name
