import { Component } from "react";

const withCounter = (OriginalComponent, initialState) => {

    class WithCounter extends Component {
        constructor() {
            super();
            this.state = {
                count: initialState
            }
        }
        // static getDerivedStateFromProps(newProps, oldState) {
        //     return {
        //         count: initialState
        //     }
        // }
        increaseCountHandler = () => {
            this.setState(ps => {
                return {
                    count: ps.count + 1
                }
            })
        }
        render() {
            return <OriginalComponent countValue={this.state.count} countHandlerFn={this.increaseCountHandler} />
        }
    }

    return WithCounter;
}
export default withCounter;