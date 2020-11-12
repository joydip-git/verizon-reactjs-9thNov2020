import React from 'react'
import PropTypes from 'prop-types'

function ClickCounter({ countValue, countHandlerFn, data }) {
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
ClickCounter.propTypes = {
    countValue: PropTypes.number.isRequired,
    countHandlerFn: PropTypes.func.isRequired,
    data:PropTypes.number.isRequired
}

export default ClickCounter;

