import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component {
    state = {
        people: [
            {
                id: 'joe',
                name: 'joe adams',
                handle: '@joe-joe'
            },
            {
                id: 'tony',
                name: 'tony stark',
                handle: '@ironman'
            },
            {
                id: 'cap',
                name: 'steve rogers',
                handle: '@captain_america'
            },  
        ]
    }

    updatePeople = (updatedPeople) => {
        this.setState({ people: updatedPeople})
    }

    render() {
        return (
            <Context.Provider
                value={{
                    people: this.state.people,
                    updatePeople: this.updatePeople,
                }}
                >
                    {this.props.children}
                </Context.Provider>
        );
    }
}