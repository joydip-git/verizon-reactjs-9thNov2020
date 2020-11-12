import React from 'react'
//import PropTypes from 'prop-types'
import withCounter from './withCounter'

function HoverCounter({ countValue, countHandlerFn, value }) {
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Hover Counter Value:&nbsp;{countValue}
            <br />
            <div onMouseOver={countHandlerFn}>Increase By Hovering</div>
        </div>
    )
}
// HoverCounter.propTypes = {
//     count: PropTypes.number.isRequired,
//     countHandler: PropTypes.func.isRequired
// }
export default withCounter(HoverCounter, 20);
