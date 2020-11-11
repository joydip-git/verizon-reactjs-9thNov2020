import React from 'react'
import PropTypes from 'prop-types'
/**
 * 
 * args:{person:{}}
 */
const People = (args) => {
    console.log('[People] rendered/mounting')
    const { person } = args;
    const style = {
        border: '1px solid blue',
        width: '250px',
        borderRadius: '5px'
    }
    let design = (
        <div style={style}>
            Name:&nbsp;
            <input type='text' value={person.name} />
            <br />
        Age:&nbsp;
            <input type='text' value={person.age} />
            <br />
            <br />
        </div>
    )
    return design;
}

People.propTypes = {
    person: PropTypes.object.isRequired
}

export default People
