import React from 'react';
import './styles/App.scss';

import Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Background/>
      <Navbar/>
      <Routes>
        <Route path="home"/>
        <Route path="*" element={ <Navigate to="home" replace />}/>
      </Routes>
    </div>
  )
};

export default App;
