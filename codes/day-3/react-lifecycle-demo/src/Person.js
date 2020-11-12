import { Component, PureComponent } from "react"
import PropTypes from 'prop-types'
import { getPerson } from "./data/peopleData";

class Person extends PureComponent {

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
    /*
    shouldComponentUpdate(newProps, currentState) {
        console.log('[Person] should update?')
        console.log(newProps)
        console.log(this.props)
        //this.props.personId===newProps.personId --> false/true
        //this.
        if (this.state.personData !== null && (this.state.personData.id === this.props.personId && this.props.personId === newProps.personId)) {
            return false;
        }
        else
            return true;
    }
*/
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('[Person] getDerivedStateFromProps')
        return {};
    }
    componentDidMount() {
        console.log('[Person] mounted')
        this.getAndSetData();
    }
    getSnapshotBeforeUpdate(oldProps, currentState) {
        console.log('[Person] getSnapshotBeforeUpdate')
        return 'hello..';
    }
    componentDidUpdate(oldProps, currentState, snapshot) {
        console.log(snapshot)
        console.log('[Person] update')
        // console.log(this.props)
        // console.log(oldProps)
        if (this.props.personId !== oldProps.personId) {
            this.getAndSetData()
        }
    }
    componentWillUnmount() {
        console.log('[Person] unmounted')
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