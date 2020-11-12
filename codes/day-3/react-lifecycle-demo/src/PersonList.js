import { elementType } from 'prop-types';
import React, { Component, Fragment } from 'react'
import { getPeople, updatePeople } from './data/peopleData';
import People from './People';
import Person from './Person';

export default class PersonList extends Component {
    constructor() {
        super()
        console.log('[PL] created');
        this.state = {
            people: [],
            selectedPersonId: 0,
            show: true
        }
    }
    //#region state-change-handlers
    updatePersonHandler = (personId, propertyName, newPropertyValue) => {
        let copyOfPeople = [...this.state.people]
        let foundPerson = copyOfPeople.find(p => p.id === personId);
        if (foundPerson) {
            let foundPersonIndex = copyOfPeople.findIndex(p => p.id === personId)

            let copyOfFoundPerson = { ...foundPerson };
            copyOfFoundPerson[propertyName] = newPropertyValue;
            copyOfPeople[foundPersonIndex] = copyOfFoundPerson;

            updatePeople(copyOfPeople);
            this.setState({
                people: copyOfPeople
            })
        }
    }
    updatePersonIdHandler = (personId) => {
        this.setState({
            selectedPersonId: personId
        })
    }
    updateShowHandler = () => {
        this.setState(ps => {
            return {
                show: !ps.show
            }
        })
    }
    //#endregion

    //#region lifecycle events
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('[PL] getDerivedStateFromProps')
        return null;
    }
    componentDidMount() {
        console.log('[PL] mounted')
        let arr = getPeople()
        this.setState({
            people: arr
        });
    }
    componentWillUnmount() {
        console.log('[PL] unmounted')
    }
    render() {
        console.log('[PL] rendered')
        return (
            <div>
                <button onClick={this.updateShowHandler}>
                    {
                        this.state.show ? 'Hide' : 'Show'
                    }
                </button>
                <br />
                <br />
                {
                    this.state.people !== [] ? (this.state.people.map(p =>
                        <People person={p} selectPersonHandler={this.updatePersonIdHandler} key={p.id} />)) : (<span>Loading...</span>)
                }
                {
                    this.state.show && (<Person personId={this.state.selectedPersonId} updateHandler={this.updatePersonHandler} />)
                }
            </div>
        );
    }
    //#endregion
}
