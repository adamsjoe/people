import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import context from './context/context';

const handleSubmit = (e, people, updatePeople) => {
    e.preventDefault()
    const newPerson = {
        id: e.target.name.value.replace('').toLowerCase(),
        name: e.target.name.value,
        handle: e.target.handle.value
    }
    const newPeople = [...people, newPerson]
    updatePeople(newPeople)
}

function CreatePerson() {
    const { people, updatePeople } = useContext(context)
    const navigate = useNavigate();
    return (
        <div>
            <Link
                className='btn btn-dark'
                to='/'
                style={{ marginBottom: 8}}
            >
                Close
            </Link>
            <form onSubmit={(e) => {
                handleSubmit(e, people, updatePeople)
                navigate('/')
            }}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                </div>
                <div className='form-group'>
                    <label htmlFor='handle'>Handle</label>
                    <input type="text" className="form-control" name="handle" id="handle" placeholder="Handle" />
                </div>    
                <button className='btn btn-primary'>Add Contact</button>
            </form>
        </div>
    )
}

export default CreatePerson