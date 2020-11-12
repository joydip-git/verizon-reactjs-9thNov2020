import React from 'react'
//import PropTypes from 'prop-types'
import withCounter from './withCounter'

function OriginalClickCounter({ countValue, countHandlerFn }) {
    return (
        <div>
            Click Counter Value:&nbsp;{countValue}
            <br />
            <button onClick={countHandlerFn}>Increase By Clicking</button>
        </div>
    )

}
// OriginalClickCounter.propTypes = {
//     count: PropTypes.number.isRequired,
//     countHandler: PropTypes.func.isRequired
// }
const ClickCounter = withCounter(OriginalClickCounter, 10);
export default ClickCounter;

