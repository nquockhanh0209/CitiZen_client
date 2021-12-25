import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchPeople from './pages/SearchPeople';
import UserManager from './pages/UserManager';
import InforUser from './pages/InforUser';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="container_main">
      
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/searchpeople' element={<SearchPeople />} />
            <Route path='/usermanager' element={<UserManager />} />
            <Route path='/infor'  element={<InforUser />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
