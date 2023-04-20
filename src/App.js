import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {Registration, Login} from './Authentification/index'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
