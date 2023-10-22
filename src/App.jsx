import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';

import Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import Welcome from './components/welcome/welcome';

const App = () => {

  return (
    <div>
      <Background/>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Welcome/>}/>
        <Route path="*" element={ <Navigate to="home" replace />}/>
      </Routes>
    </div>
  )
};

export default App;
