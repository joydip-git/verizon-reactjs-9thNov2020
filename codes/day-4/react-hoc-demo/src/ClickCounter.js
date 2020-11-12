import React from 'react'
//import PropTypes from 'prop-types'
import withCounter from './withCounter'
import withErrorBoundary from './withErrorBoundary';

function OriginalClickCounter({ countValue, countHandlerFn, data }) {
    return (
        <div>
            Data Value:&nbsp;{data}
            <br />
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
const ClickCounter = withErrorBoundary(withCounter(OriginalClickCounter, 10));
export default ClickCounter;

