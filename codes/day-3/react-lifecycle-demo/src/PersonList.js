import React, { Component } from 'react'
import { getPeople } from './data/peopleData';
import People from './People';

export default class PersonList extends Component {
    constructor() {
        super()
        console.log('[PL] created');
        this.state = {
            people: []
        }
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
                <div>
                    {
                        this.state.people.map(p => {
                            return <People person={p} key={p.id} />
                        })
                    }
                </div>
            );
        } else {
            design = <span>Loading...</span>
        }

        return design;
    }
}
