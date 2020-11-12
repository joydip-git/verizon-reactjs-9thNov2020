//import { object } from "prop-types";
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
        // shouldComponentUpdate(newProps, oldState) {
        //     // console.log('shouldComponentUpdate')
        //     // console.log(newProps)
        //     // console.log(this.props)
        //     for (const propName in newProps) {
        //         if (this.props[propName] === newProps[propName]) {
        //             return false;
        //         } else {
        //             return true;
        //         }
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
            // console.log(this.props.data)
            // console.log(this.props.value)
            // const derivedProps = { ...this.props }
            return <OriginalComponent countValue={this.state.count} countHandlerFn={this.increaseCountHandler} {...this.props} />
        }
    }
    return WithCounter;
}
export default withCounter;