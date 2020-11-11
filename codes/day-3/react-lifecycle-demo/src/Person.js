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
        personId: PropTypes.number.isRequired,
        updateHandler: PropTypes.func.isRequired
    }
    getAndSetData = () => {
        let personData = getPerson(this.props.personId)
        // console.log(personData)
        if (personData !== undefined) {
            this.setState({
                personData: personData
            })
        }
    }
    shouldComponentUpdate(newProps, currentState) {
        console.log('[Person] should update?')
        console.log(newProps)
        console.log(this.props)
        if (this.state.personData === null) {
            return true
        } else if (newProps.personId !== this.props.personId && this.state.personData.id !== this.props.personId) {
            return true;
        } else {
            return false;
        }
    }
    componentDidMount() {
        console.log('[Person] mounted')
        this.getAndSetData();
    }
    componentDidUpdate(oldProps, currentState) {
        console.log('[Person] update')
        // console.log(this.props)
        // console.log(oldProps)
        if (this.props.personId !== oldProps.personId) {
            this.getAndSetData()
        }
    }
    render() {
        console.log('[Person] rendered')
        console.log(this.props.personId)
        let design = <span>Not Found...</span>
        const { personData } = this.state;
        if (personData !== null) {
            design = (
                <div>
                    Name:&nbsp;
                    <input
                        type='text'
                        value={personData.name}
                        onChange={(event) => this.props.updateHandler(personData.id, 'name', event.target.value)} />
                    <br />
                    Age:&nbsp;
                    <input
                        type='text'
                        value={personData.age}
                        onChange={(event) => this.props.updateHandler(personData.id, 'age', parseInt(event.target.value))} />
                    <br />
                </div>
            )
        }
        return design;
    }
}

export default Person;