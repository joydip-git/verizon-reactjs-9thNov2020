import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: null
    }
    static getDerivedStateFromError(error) {
        console.log('[EB] getDerivedStateFromError')
        //console.log(error)
        return {
            error: error
        };
    }
    componentDidCatch(error, info) {
        console.log('[EB] componentDidCatch')
        console.log(error)
        console.log(info)
        this.props.logger({ error: error, stack: info })
        // this.setState({
        //     error: error
        // })
    }
    render() {
        //debugger;
        console.log('[EB] rendered')
        if (this.state.error !== null) {
            return <span>Error Occurred</span>
        } else {
            return this.props.children;
        }
    }
}
