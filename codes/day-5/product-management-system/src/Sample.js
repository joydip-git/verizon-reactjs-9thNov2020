import React, { useRef, useState } from 'react'

const Sample = () => {
    const [nameInputState, setNameInputState] = useState({
        name: 'name',
        value: '',
        error: null

    })
    const [ageInputState, setAgeInputState] = useState({
        name: 'age',
        value: 0,
        error: null

    })

    const nameInputRef = useRef(null);
    const ageInputRef = useRef(null);
    const validateForm = (event) => {
        event.preventDefault();
        if (nameInputRef.current.value === '') {
            setNameInputState(ps => {
                return {
                    ...ps,
                    error: 'Please enter name'
                }
            })
        } else {
            setNameInputState(ps => {
                return {
                    ...ps,
                    error: ''
                }
            })
        }

        if (ageInputRef.current.value === '' || ageInputRef.current.value === '0') {
            setAgeInputState(ps => {
                return {
                    ...ps,
                    error: 'Please enter age'
                }
            })
        } else {
            setAgeInputState(ps => {
                return {
                    ...ps,
                    error: ''
                }
            })
        }

        let person = {
            name: nameInputState.value,
            age: ageInputState.value
        }
    }
    return (
        <form>
            Age:&nbsp;
            <input
                type='text'
                value={ageInputState.value}
                name={ageInputState.name}
                onChange={(e) => setAgeInputState((ps) => {
                    return {
                        ...ps,
                        value: parseInt(e.target.value),
                        error: ''
                    }
                })}
                ref={ageInputRef}
            />
            {
                ageInputState.error !== null && <span>{ageInputState.error}</span>
            }
            <br />
            Name:& nbsp;
            <input
                type='text'
                value={nameInputState.value}
                name={nameInputState.name}
                onChange={(e) =>
                    setNameInputState(
                        (ps) => {
                            return {
                                ...ps,
                                value: e.target.value,
                                error: ''
                            }
                        })}
                ref={nameInputRef}
            />
            {
                nameInputState.error !== null && <span>{nameInputState.error}</span>
            }
            <br />
            <input type='submit' value='submit' onClick={validateForm} />
        </form >
    )
}

export default Sample
