import React, { useState } from 'react';
import './App.css';
import PeopleList from './PeopleList';
import GlobalState from './context/GlobalState';
import CreatePerson from './CreatePerson';
import NotFound from './errorPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GlobalState>
      <div className='container'>
      <Routes>
        <Route exact path='/' element={<PeopleList />} />
        <Route exact path='/create' element={<CreatePerson />} />
        <Route path='*'  element={<NotFound />} /> 
      </Routes>    
      </div>
    </GlobalState>
  );
}

export default App;