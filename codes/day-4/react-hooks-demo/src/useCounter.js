import { useState } from "react"

const useCounter = (initialState) => {

    const [countState, setCountState] = useState(initialState);

    const increaseCount = () => {
        setCountState(ps => ps + 1);
    }

    return [countState, increaseCount];
}
export default useCounter;