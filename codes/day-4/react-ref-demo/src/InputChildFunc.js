import React, { forwardRef } from 'react'

/*
function InputChildFunc({ x }, reference) {
    return (
        <input type='text' ref={reference} />
    )
}

//const InputChildFunc = forwardRef(OriginalInputChildFunc);

export default forwardRef(InputChildFunc)

// const forward = (OC) => {
//     class Forward extends Comment {
//         render() {
//             return <OC {...this.props} />
//         }
//     }
//     return Forward;
// }
*/

const InputChildFunc = forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})
export default InputChildFunc;