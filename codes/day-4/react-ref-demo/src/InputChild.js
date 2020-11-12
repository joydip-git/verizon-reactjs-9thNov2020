import React, { Component, createRef } from 'react'

export default class InputChild extends Component {

    inputRef = createRef();
    focusInput = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}
