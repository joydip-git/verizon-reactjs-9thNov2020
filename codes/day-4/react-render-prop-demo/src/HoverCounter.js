import React from 'react'
import PropTypes from 'prop-types'

function HoverCounter({ count, countHandler, value }) {
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Hover Counter Value:&nbsp;{count}
            <br />
            <div onMouseOver={countHandler}>
                Inrease By Hovering
            </div>
        </div>
    )
}
HoverCounter.propTypes = {
    count: PropTypes.number.isRequired,
    countHandler: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default HoverCounter;
