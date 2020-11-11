import { Component } from "react"
import PropTypes from 'prop-types'
import { getPerson } from "./data/peopleData";

class Person extends Component {

    constructor() {
        super()
        console.log('[Person] created')
        this.state = {
            personData: null
        }
    }
    static propTypes = {
        personId: PropTypes.number.isRequired
    }
    componentDidMount() {
        console.log('[Person] mounted')
        let personData = getPerson(this.props.personId)
        if (personData !== null) {
            this.setState({
                personData: personData
            })
        }
    }
    render() {
        console.log('[Person] rendered')
        let design = <span>Not Found...</span>
        if (this.state.personData !== null) {
            design = <span>{this.state.personData.name}</span>
        }
        return design;
    }
}

export default Person;