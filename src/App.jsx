
import React from 'react';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';

import Home from './Home/Home';
import Login from './Components/Login/Login';
import Impot from './Impot/Impot';
import Acte from './Acte/acte';
import Creer from './Components/Creer/Creer';
import AddUser from './Components/Login/AddUser';
import './App.css'


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/impot" element={<Impot />} />
      <Route path="/acte" element={<Acte/>} />
      <Route path="/creer" element={<Creer/>} />
      <Route path="/AddUser" element={<AddUser/>} />
     </Routes>
  </Router>
  );
}

export default App;
