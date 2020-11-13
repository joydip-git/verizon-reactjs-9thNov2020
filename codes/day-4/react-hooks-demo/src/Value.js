import React, { useEffect } from 'react'

const Value = ({ value, handler }) => {

    //componentDidUpdate
    useEffect(() => {
        console.log('[Value] this effect runs always')
        
        return () => {
            console.log('[Value] this runs always except first time and it runs before the outside code')
        }
    })

    //componentDidUpdate (dependent on value change)
    useEffect(() => {
        console.log('[Value] this effect runs when value changes')

        return () => {
            console.log('[Value] this runs only when value changes except first time but will run before the outside code')
        }
    }, [value])

    //componentDidMount
    useEffect(() => {
        console.log('[Value] this effect runs only one time')

        //componentWillUnmount
        return () => {
            console.log('[Value] this runs only only time when the component is dismounted..also other inside codes will be running too')
        }
    }, [])

    console.log('[Value] rendered')
    return (
        <div>
            Value:&nbsp;{value}
            <button onClick={handler}>Increase</button>
        </div>
    )
}

export default Value
