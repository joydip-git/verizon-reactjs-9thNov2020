import React from 'react'
import PropTypes from 'prop-types'
/**
 * 
 * args:{person:{}}
 */
const People = (args) => {
    console.log('[People] rendered/mounting')
    const { person, selectPersonHandler } = args;
    const style = {
        border: '1px solid blue',
        width: '250px',
        borderRadius: '5px'
    }
    let design = (
        <div style={style} onClick={() => selectPersonHandler(person.id)}>
            <span>{person.name}</span>
        </div>
    )
    return design;
}

People.propTypes = {
    person: PropTypes.object.isRequired,
    selectPersonHandler: PropTypes.func.isRequired
}

export default People
