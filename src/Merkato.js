import React from 'react';
import logo from './assets/1m.png';
import { Link } from 'react-router-dom';
import './App.css';

function Merkato() {
  return (
    <div className="App">
      <Link to= "/Tapas">
      <img className="logo1" src={logo} alt="merkato1" />
      </Link>
    </div>
  );
}

export default Merkato;