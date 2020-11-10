import React from 'react'
import PropTypes from 'prop-types'

/*
const multiplyByTwo = (number) => {
    return number * 2;
}
const convert = (numbers, logic) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        let temp = logic(numbers[i])
        result.push(temp)
    }
    return result;
}

convert([1, 2, 3, 4], multiplyByTwo);
*/
const multiplyByTwo = (number, index) => {
    let design = <span>Value:{number * 2}<br /></span>;
    return design;
}

const Welcome = (args) => {
    const { messageValue, numberValue, objValue, numbers, msg } = args;
    return (
        <span id='msgSapn'>
            {messageValue}
            <br />
            {numberValue}
            <br />
            {objValue.name}
            <br />
            {msg}
            <br />
            {numbers.map(multiplyByTwo)}
        </span>
    );
}

Welcome.propTypes = {
    messageValue: PropTypes.string.isRequired,
    numberValue: PropTypes.number.isRequired,
    numbers: PropTypes.array,
    objValue: PropTypes.object
}
export default Welcome;