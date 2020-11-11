import React, { Component, Fragment } from 'react'
import { getPeople } from './data/peopleData';
import People from './People';
import Person from './Person';

export default class PersonList extends Component {
    constructor() {
        super()
        console.log('[PL] created');
        this.state = {
            people: [],
            selectedPersonId: 0
        }
    }
    updatePersonIdHandler = (personId) => {
        this.setState({
            selectedPersonId: personId
        })
    }
    componentDidMount() {
        console.log('[PL] mounted')
        let arr = getPeople()
        this.setState({
            people: arr
        })
    }
    componentWillUnmount() {
        console.log('[PL] unmounted')
    }
    render() {
        console.log('[PL] rendered')
        let design = null;
        if (this.state.people !== []) {
            design = (
                <>
                    {/*<Fragment>*/}
                    <div>
                        {
                            this.state.people.map(p => {
                                return <People person={p} key={p.id} selectPersonHandler={this.updatePersonIdHandler} />
                            })
                        }
                    </div>

                    {/*</Fragment >*/}
                </>
        
            );
        } else {
            design = <span>Loading...</span>
        }
        return design;
    }
}
