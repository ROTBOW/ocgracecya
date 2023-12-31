import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';

import Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import Welcome from './components/welcome/welcome';
import Vespers from './components/vespers/vespers';
import Footer from './components/footer/footer';

const App = () => {

  return (
    <div className='app-container'>
      <Background/>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Welcome/>}/>
        <Route path="vespers" element={<Vespers/>}/>
        <Route path="*" element={ <Navigate to="home" replace />}/>
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
