import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import context from "./context/context";

function SearchBar({ setShowPeople, showPeople, onNavigate }) {
    const { people } = useContext(context)
    const [query, setQuery] = useState('')

    const onChange = (event) => {
        const updatedQuery = event.target.value.trim()
        const updatedShowPeople = updatedQuery === '' ? people  : showPeople.filter((p) => {
            return p.name.toLowerCase().includes(updatedQuery.toLowerCase())
        })

        setShowPeople(updatedShowPeople)
        setQuery(updatedQuery)
    }

    return (
        <form className="form-inline">
            <div className="row g-3">
                <div className="col-auto">
                    <input className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={query}
                        onChange={onChange}
                    />                    
                </div>
                <div className="col-auto">
                    <Link
                        to='/create'
                        className="btn btn-outline-success my-2 my-sm-0"                        
                    >Add Person</Link>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;