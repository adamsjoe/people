import React, { useState, useEffect, useContext } from 'react';
import context from './context/context';
import SearchBar from './SearchBar';

function PeopleList() {
    const { people, updatePeople } = useContext(context)
    const [showPeople, setShowPeople] = useState(people)

    useEffect(() => {
        if (showPeople.length < people.length) {
            setShowPeople(showPeople)
        } else {
            setShowPeople(people)
        }
    }, [people, showPeople])

    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <SearchBar setShowPeople={setShowPeople} showPeople={showPeople} />
                </nav>
            </div>
            <ol style={{ paddingTop: 24 }}>
            {showPeople.map((person) => (
                <div key={personalbar.id} style={{ marginBottom: 24 }}>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text">{person.handle}</p>
                            <button type="button" className="btn btn-dark" 
                            onClick={() => {
                                const newPeople = people.filter((p) => {
                                    return p.id !== person.id
                                })
                                const newShowPeople = showPeople.filter((p) => {
                                    return p.id !== person.id
                                })
                                updatePeople(newPeople)
                                setShowPeople(newShowPeople)
                            }} >X</button>
                        </div>
                    </div>
                </div>
            ))}
        </ol>
        </div>
    )
}

export default PeopleList;