import { useState } from "react"

const useCounter = () => {

    const [countState, setCountState] = useState(0);

    const increaseCount = () => {
        setCountState(ps => ps + 1);
    }

    return [countState, increaseCount];
}
export default useCounter;