import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    state = {
        count: 0
    }

    // static propTypes = {
    //     invoke: PropTypes.func.isRequired
    // }

    increaseCountHandler = () => {
        this.setState(ps => {
            return {
                count: ps.count + 1
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.render(this.state.count, this.increaseCountHandler)
                }
            </React.Fragment>
        )
    }
}
Counter.propTypes = {
    render: PropTypes.func.isRequired
}

export default Counter;

// class Frag extends Component {
//     render() {
//         return this.props.children;
//     }
// }