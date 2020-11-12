import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class Counter extends Component {
    state = {
        count: 0
    }
    increaseCountHandler = () => {
        this.setState(ps => {
            return {
                count: ps.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <ClickCounter count={this.state.count} countHandler={this.increaseCountHandler} />
                <br />
                <br />
                <HoverCounter count={this.state.count} countHandler={this.increaseCountHandler} />
            </div>
        )
    }
}
