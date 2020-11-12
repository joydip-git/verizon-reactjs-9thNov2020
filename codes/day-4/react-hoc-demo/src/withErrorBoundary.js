import { Component } from "react"
import PropTypes from 'prop-types'

const withErrorBoundary = (WrappedComponent) => {

    class WithErrorBoundary extends Component {
        constructor() {
            super()
            this.state = {
                error: null
            }
        }
        static propTypes = {
            loggerFn: PropTypes.func.isRequired
        }
        static getDerivedStateFromError(error) {
            return {
                error: error
            }
        }
        componentDidCatch(error, info) {
            this.props.loggerFn({ error, info })
        }
        render() {
            if (this.state.error !== null) {
                return <span>Error Occurred</span>
            } else
                return <WrappedComponent {...this.props} />;
        }
    }

    return WithErrorBoundary;
}

export default withErrorBoundary
