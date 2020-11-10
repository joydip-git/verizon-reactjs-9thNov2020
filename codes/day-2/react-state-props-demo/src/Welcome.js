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

/**
 * {
     msg:'Welcome to React JS',
     messageValue: undefined,
     numberValue: 20,
     numbers: undefined,
     objValue: undefined
 * }
 */

const Welcome = (args) => {
    //args.numberValue = args.numberValue + 1;
    console.log('Welcome rendered')
    const { messageValue, numberValue, objValue, numbers, msg, changeHandler } = args;
    return (
        <span id='msgSapn'>
            {messageValue}
            <br />
            <input
                type='text'
                value={numberValue}
                onChange={(event) => changeHandler(parseInt(event.target.value))}
            />
            
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
    objValue: PropTypes.object,
    changeHandler: PropTypes.func.isRequired
}
export default Welcome;

/**
 * {
 *   key:null,
 *   ref:null,
 *   type:'span',
 *   props:{
 *      msg:'Welcome to React JS',
        messageValue: undefined,
        numberValue: undefined,
        numbers: undefined,
        objValue: undefined,
        id:,
        style:
        className:
 *   }
 * }
 */